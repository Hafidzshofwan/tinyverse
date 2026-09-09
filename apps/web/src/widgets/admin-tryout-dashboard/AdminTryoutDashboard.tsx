"use client";

/**
 * AdminTryoutDashboard.tsx
 * -------------------------
 * Dashboard statistik hasil tryout seluruh pengguna — khusus admin.
 *
 * Cara kerja (Opsi A — client-side):
 *   1. Inisialisasi Firebase (compat SDK yang sudah ada).
 *   2. collectionGroup("paket") untuk membaca tryoutHistory semua user sekaligus.
 *   3. Statistik dihitung di sisi browser, tidak ada Vercel Function yang jalan.
 *
 * Firestore Rules harus sudah ditambahkan:
 *   match /tryoutHistory/{uid} {
 *     allow read: if pemilik(uid) || admin();
 *     match /paket/{paketId} {
 *       allow read: if pemilik(uid) || admin();
 *     }
 *   }
 *
 * Catatan performa:
 *   Browser admin mengunduh SEMUA dokumen paket dari semua user.
 *   Setiap dokumen berisi field `riwayat` (maks 10 sesi) + `jawabanUser`.
 *   Pada skala < 200 user ini masih nyaman; di atas itu pertimbangkan Opsi B
 *   (API Route + Admin SDK + agregasi server-side).
 */

import { useEffect, useMemo, useState, useCallback } from "react";
import { initFirebase } from "@/shared/firebase/firebaseClient";
import type { HasilTryOut, SubdivisiScore } from "@/features/tryout/types";
import { PAKET_TRYOUT_LIST } from "@/features/tryout/data";
import gaya from "./AdminTryoutDashboard.module.css";

// ---------------------------------------------------------------------------
// Tipe data internal dashboard
// ---------------------------------------------------------------------------

interface DokumenPaket {
  uid: string;
  paketId: string;
  riwayat: HasilTryOut[];
  updatedAt: number;
}

interface StatistikUser {
  uid: string;
  totalSesi: number;
  skorTertinggi: number;
  skorRataRata: number;
  paketDikerjakan: string[];
  terakhirTryout: string; // ISO
  lulusCount: number;
}

interface StatistikGlobal {
  totalUserAktif: number;         // user yang pernah tryout ≥ 1 kali
  totalSesi: number;              // semua sesi dari semua user
  rataSkor: number;               // rata-rata skor seluruh sesi
  lulusRate: number;              // % lulus dari total sesi
  subdivisiAggregate: SubdivisiAggregate[];
  distribusiSkor: DistribusiItem[];
  trenHarian: TrenHarianItem[];
  perPaket: StatistikPerPaket[];
  topUsers: StatistikUser[];
  semuaUsers: StatistikUser[];
}

interface SubdivisiAggregate {
  subdivisi: string;
  label: string;
  totalSoal: number;
  totalBenar: number;
  persen: number;
}

interface DistribusiItem {
  rentang: string;
  jumlah: number;
  min: number;
  max: number;
}

interface TrenHarianItem {
  tanggal: string;         // "DD MMM"
  tanggalISO: string;
  jumlahSesi: number;
  rataSkor: number;
}

interface StatistikPerPaket {
  paketId: string;
  judul: string;
  totalSesi: number;
  rataSkor: number;
  lulusRate: number;
  userUnik: number;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const FORMAT_TANGGAL = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
});
const FORMAT_TANGGAL_PANJANG = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function labelTanggal(iso: string): string {
  const d = new Date(iso);
  return isNaN(d.getTime()) ? "-" : FORMAT_TANGGAL.format(d);
}

function waktuRelatif(iso: string): string {
  const ms = new Date(iso).getTime();
  if (!ms || isNaN(ms)) return "-";
  const detik = Math.floor((Date.now() - ms) / 1000);
  if (detik < 60) return "Baru saja";
  const menit = Math.floor(detik / 60);
  if (menit < 60) return menit + " menit lalu";
  const jam = Math.floor(menit / 60);
  if (jam < 24) return jam + " jam lalu";
  const hari = Math.floor(jam / 24);
  if (hari < 30) return hari + " hari lalu";
  const bulan = Math.floor(hari / 30);
  if (bulan < 12) return bulan + " bulan lalu";
  return Math.floor(bulan / 12) + " tahun lalu";
}

// ---------------------------------------------------------------------------
// Fungsi pengambilan data Firestore (per-user, tanpa collectionGroup index)
// ---------------------------------------------------------------------------

/**
 * Strategi: baca daftar uid dari koleksi `users` (admin sudah punya akses),
 * lalu untuk setiap uid ambil sub-koleksi tryoutHistory/{uid}/paket secara paralel.
 * Tidak butuh Firestore index apapun — tidak ada collectionGroup query.
 */
async function ambilSemuaDokumenPaket(): Promise<DokumenPaket[]> {
  const { db } = await initFirebase();

  // Langkah 1: ambil semua uid dari koleksi users (admin bisa baca semua)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usersSnap = await (db as any).collection("users").limit(500).get();

  const uids: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  usersSnap.forEach((doc: any) => uids.push(doc.id));

  if (uids.length === 0) return [];

  // Langkah 2: untuk setiap uid, ambil semua dokumen di tryoutHistory/{uid}/paket
  // Jalankan paralel dengan Promise.all agar cepat
  const hasilPerUser = await Promise.all(
    uids.map(async (uid) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paketSnap = await (db as any)
          .collection("tryoutHistory")
          .doc(uid)
          .collection("paket")
          .get();

        const dokumen: DokumenPaket[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        paketSnap.forEach((doc: any) => {
          const data = doc.data();
          if (!Array.isArray(data?.riwayat) || data.riwayat.length === 0) return;
          dokumen.push({
            uid,
            paketId: doc.id,
            riwayat: data.riwayat as HasilTryOut[],
            updatedAt: data.updatedAt ?? 0,
          });
        });
        return dokumen;
      } catch {
        // Uid ini tidak punya tryoutHistory atau tidak bisa diakses — skip saja
        return [];
      }
    }),
  );

  // Flatten array of arrays
  return hasilPerUser.flat();
}

// ---------------------------------------------------------------------------
// Fungsi kalkulasi statistik
// ---------------------------------------------------------------------------

function hitungStatistik(dokumen: DokumenPaket[]): StatistikGlobal {
  // Kumpulkan semua sesi flat
  const semuaSesi: { sesi: HasilTryOut; uid: string; paketId: string }[] = [];
  for (const dok of dokumen) {
    for (const sesi of dok.riwayat) {
      semuaSesi.push({ sesi, uid: dok.uid, paketId: dok.paketId });
    }
  }

  const totalSesi = semuaSesi.length;
  if (totalSesi === 0) {
    return {
      totalUserAktif: 0,
      totalSesi: 0,
      rataSkor: 0,
      lulusRate: 0,
      subdivisiAggregate: [],
      distribusiSkor: [],
      trenHarian: [],
      perPaket: [],
      topUsers: [],
      semuaUsers: [],
    };
  }

  // --- Statistik per user ---
  const userMap = new Map<string, StatistikUser>();
  for (const { sesi, uid, paketId } of semuaSesi) {
    const existing = userMap.get(uid) ?? {
      uid,
      totalSesi: 0,
      skorTertinggi: 0,
      skorRataRata: 0,
      paketDikerjakan: [],
      terakhirTryout: sesi.tanggalISO,
      lulusCount: 0,
    };
    existing.totalSesi += 1;
    existing.skorTertinggi = Math.max(existing.skorTertinggi, sesi.skorPersen);
    existing.skorRataRata += sesi.skorPersen;
    if (!existing.paketDikerjakan.includes(paketId)) {
      existing.paketDikerjakan.push(paketId);
    }
    if (sesi.lulus) existing.lulusCount += 1;
    // Ambil tanggal terbaru
    if (new Date(sesi.tanggalISO) > new Date(existing.terakhirTryout)) {
      existing.terakhirTryout = sesi.tanggalISO;
    }
    userMap.set(uid, existing);
  }
  // Finalisasi rata-rata
  const semuaUsers: StatistikUser[] = [];
  for (const [, u] of userMap) {
    u.skorRataRata = Math.round(u.skorRataRata / u.totalSesi);
    semuaUsers.push(u);
  }
  semuaUsers.sort(
    (a, b) =>
      new Date(b.terakhirTryout).getTime() -
      new Date(a.terakhirTryout).getTime(),
  );
  const topUsers = [...semuaUsers]
    .sort((a, b) => b.skorTertinggi - a.skorTertinggi)
    .slice(0, 10);

  // --- Statistik global ---
  let totalSkor = 0;
  let totalLulus = 0;
  for (const { sesi } of semuaSesi) {
    totalSkor += sesi.skorPersen;
    if (sesi.lulus) totalLulus += 1;
  }
  const rataSkor = Math.round(totalSkor / totalSesi);
  const lulusRate = Math.round((totalLulus / totalSesi) * 100);

  // --- Distribusi skor ---
  const rentangConfig = [
    { label: "0–19", min: 0, max: 19 },
    { label: "20–39", min: 20, max: 39 },
    { label: "40–59", min: 40, max: 59 },
    { label: "60–74", min: 60, max: 74 },
    { label: "75–89", min: 75, max: 89 },
    { label: "90–100", min: 90, max: 100 },
  ];
  const distribusiSkor: DistribusiItem[] = rentangConfig.map((r) => ({
    rentang: r.label,
    jumlah: semuaSesi.filter(
      ({ sesi }) => sesi.skorPersen >= r.min && sesi.skorPersen <= r.max,
    ).length,
    min: r.min,
    max: r.max,
  }));

  // --- Subdivisi aggregate ---
  const subdivisiMap = new Map<
    string,
    { label: string; totalSoal: number; totalBenar: number }
  >();
  for (const { sesi } of semuaSesi) {
    if (!Array.isArray(sesi.rincianSubdivisi)) continue;
    for (const s of sesi.rincianSubdivisi as SubdivisiScore[]) {
      const cur = subdivisiMap.get(s.subdivisi) ?? {
        label: s.label,
        totalSoal: 0,
        totalBenar: 0,
      };
      cur.totalSoal += s.total;
      cur.totalBenar += s.benar;
      subdivisiMap.set(s.subdivisi, cur);
    }
  }
  const subdivisiAggregate: SubdivisiAggregate[] = [];
  for (const [subdivisi, val] of subdivisiMap) {
    subdivisiAggregate.push({
      subdivisi,
      label: val.label,
      totalSoal: val.totalSoal,
      totalBenar: val.totalBenar,
      persen:
        val.totalSoal > 0
          ? Math.round((val.totalBenar / val.totalSoal) * 100)
          : 0,
    });
  }
  subdivisiAggregate.sort((a, b) => a.persen - b.persen);

  // --- Tren harian (30 hari terakhir) ---
  const hariMap = new Map<
    string,
    { iso: string; jumlah: number; totalSkor: number }
  >();
  const batas30Hari = Date.now() - 30 * 24 * 60 * 60 * 1000;
  for (const { sesi } of semuaSesi) {
    const d = new Date(sesi.tanggalISO);
    if (isNaN(d.getTime()) || d.getTime() < batas30Hari) continue;
    const key = d.toISOString().slice(0, 10); // YYYY-MM-DD
    const cur = hariMap.get(key) ?? { iso: sesi.tanggalISO, jumlah: 0, totalSkor: 0 };
    cur.jumlah += 1;
    cur.totalSkor += sesi.skorPersen;
    hariMap.set(key, cur);
  }
  const trenHarian: TrenHarianItem[] = Array.from(hariMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, val]) => ({
      tanggal: labelTanggal(val.iso),
      tanggalISO: val.iso,
      jumlahSesi: val.jumlah,
      rataSkor: Math.round(val.totalSkor / val.jumlah),
    }));

  // --- Statistik per paket ---
  const paketMap = new Map<
    string,
    {
      jumlah: number;
      totalSkor: number;
      lulus: number;
      users: Set<string>;
    }
  >();
  for (const { sesi, uid, paketId } of semuaSesi) {
    const cur = paketMap.get(paketId) ?? {
      jumlah: 0,
      totalSkor: 0,
      lulus: 0,
      users: new Set<string>(),
    };
    cur.jumlah += 1;
    cur.totalSkor += sesi.skorPersen;
    if (sesi.lulus) cur.lulus += 1;
    cur.users.add(uid);
    paketMap.set(paketId, cur);
  }
  const paketLookup = new Map(PAKET_TRYOUT_LIST.map((p) => [p.id, p.judul]));
  const perPaket: StatistikPerPaket[] = [];
  for (const [paketId, val] of paketMap) {
    perPaket.push({
      paketId,
      judul: paketLookup.get(paketId) ?? paketId,
      totalSesi: val.jumlah,
      rataSkor: Math.round(val.totalSkor / val.jumlah),
      lulusRate: Math.round((val.lulus / val.jumlah) * 100),
      userUnik: val.users.size,
    });
  }
  perPaket.sort((a, b) => b.totalSesi - a.totalSesi);

  return {
    totalUserAktif: userMap.size,
    totalSesi,
    rataSkor,
    lulusRate,
    subdivisiAggregate,
    distribusiSkor,
    trenHarian,
    perPaket,
    topUsers,
    semuaUsers,
  };
}

// ---------------------------------------------------------------------------
// Sub-komponen: KPI Card
// ---------------------------------------------------------------------------

function KpiCard({
  angka,
  label,
  satuan,
  aksenWarna,
  sub,
}: {
  angka: string | number;
  label: string;
  satuan?: string;
  aksenWarna: string;
  sub?: string;
}) {
  return (
    <div className={gaya.kpiKartu} style={{ borderLeftColor: aksenWarna }}>
      <div className={gaya.kpiAngka}>
        {angka}
        {satuan && <span className={gaya.kpiSatuan}>{satuan}</span>}
      </div>
      <div className={gaya.kpiLabel}>{label}</div>
      {sub && <div className={gaya.kpiSub}>{sub}</div>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-komponen: Bar Chart Subdivisi
// ---------------------------------------------------------------------------

function BarChartSubdivisi({ data }: { data: SubdivisiAggregate[] }) {
  if (data.length === 0) return <div className={gaya.kosong}>Belum ada data subdivisi.</div>;

  return (
    <div className={gaya.barChartBody}>
      {data.map((item) => {
        const persen = item.persen;
        const warna =
          persen >= 75 ? "#10B981" : persen >= 55 ? "#F59E0B" : "#EF4444";
        return (
          <div key={item.subdivisi} className={gaya.barRow}>
            <div className={gaya.barLabelGroup}>
              <span className={gaya.barNama}>{item.label}</span>
              <span className={gaya.barRasio}>
                {item.totalBenar}/{item.totalSoal} soal
              </span>
            </div>
            <div className={gaya.barTrackWrap}>
              <div className={gaya.barTrack}>
                {/* Garis passing grade 75% */}
                <div
                  className={gaya.barThreshold}
                  style={{ left: "75%" }}
                  title="Passing grade 75%"
                />
                <div
                  className={gaya.barFill}
                  style={{ width: persen + "%", background: warna }}
                />
              </div>
              <span className={gaya.barPersenLabel} style={{ color: warna }}>
                {persen}%
              </span>
            </div>
          </div>
        );
      })}
      <p className={gaya.catatanChart}>
        Garis putus-putus = passing grade 75%. Urut dari subdivisi terlemah ke terkuat.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-komponen: Distribusi Skor (Histogram)
// ---------------------------------------------------------------------------

function HistogramSkor({ data }: { data: DistribusiItem[] }) {
  const maks = Math.max(...data.map((d) => d.jumlah), 1);
  const total = data.reduce((s, d) => s + d.jumlah, 0);

  return (
    <div className={gaya.histoWrap}>
      {data.map((item) => {
        const tinggi = Math.round((item.jumlah / maks) * 100);
        const persen = total > 0 ? Math.round((item.jumlah / total) * 100) : 0;
        const isLulus = item.min >= 75;
        const warna = isLulus
          ? "#10B981"
          : item.min >= 60
          ? "#F59E0B"
          : "#94A3B8";
        return (
          <div key={item.rentang} className={gaya.histoKolom}>
            <div className={gaya.histoBarWrap}>
              <div
                className={gaya.histoBar}
                style={{ height: tinggi + "%", background: warna }}
                title={`${item.jumlah} sesi (${persen}%)`}
              />
            </div>
            <div className={gaya.histoLabel}>{item.rentang}</div>
            <div className={gaya.histoJumlah}>{item.jumlah}</div>
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-komponen: Tren Harian (Line Chart SVG)
// ---------------------------------------------------------------------------

function TrenHarianChart({ data }: { data: TrenHarianItem[] }) {
  if (data.length === 0) {
    return (
      <div className={gaya.kosong}>
        Belum ada data 30 hari terakhir.
      </div>
    );
  }

  const W = 600;
  const H = 180;
  const PAD = { top: 16, right: 20, bottom: 40, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const maksSesi = Math.max(...data.map((d) => d.jumlahSesi), 1);

  const toX = (i: number) =>
    PAD.left + (i / Math.max(data.length - 1, 1)) * innerW;
  const toY = (val: number) =>
    PAD.top + innerH - (val / maksSesi) * innerH;

  const pts = data.map((d, i) => `${toX(i)},${toY(d.jumlahSesi)}`).join(" ");
  const areaPath =
    `M ${toX(0)},${PAD.top + innerH} ` +
    data.map((d, i) => `L ${toX(i)},${toY(d.jumlahSesi)}`).join(" ") +
    ` L ${toX(data.length - 1)},${PAD.top + innerH} Z`;

  // Label sumbu X — tampilkan maks 7 label
  const step = Math.max(1, Math.ceil(data.length / 7));
  const labelX = data
    .map((d, i) => ({ i, label: d.tanggal }))
    .filter(({ i }) => i % step === 0 || i === data.length - 1);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={gaya.trendSvg}
      aria-label="Grafik tren sesi tryout harian"
    >
      <defs>
        <linearGradient id="atd-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
        </linearGradient>
      </defs>

      {/* Grid horizontal */}
      {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
        const y = PAD.top + innerH * (1 - frac);
        return (
          <line
            key={frac}
            x1={PAD.left}
            x2={PAD.left + innerW}
            y1={y}
            y2={y}
            stroke="var(--tv-line, #E2E8F0)"
            strokeWidth="1"
          />
        );
      })}

      {/* Area fill */}
      <path d={areaPath} fill="url(#atd-grad)" />

      {/* Line */}
      <polyline
        points={pts}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Titik data */}
      {data.map((d, i) => (
        <circle
          key={i}
          cx={toX(i)}
          cy={toY(d.jumlahSesi)}
          r="3.5"
          fill="#fff"
          stroke="#2563EB"
          strokeWidth="2"
        >
          <title>{`${d.tanggal}: ${d.jumlahSesi} sesi, rata ${d.rataSkor}%`}</title>
        </circle>
      ))}

      {/* Label sumbu X */}
      {labelX.map(({ i, label }) => (
        <text
          key={i}
          x={toX(i)}
          y={H - 8}
          textAnchor="middle"
          fontSize="10"
          fill="var(--kp-teks-sekunder, #1E293B)"
        >
          {label}
        </text>
      ))}

      {/* Label sumbu Y */}
      {[0, Math.round(maksSesi / 2), maksSesi].map((val) => (
        <text
          key={val}
          x={PAD.left - 6}
          y={toY(val) + 4}
          textAnchor="end"
          fontSize="10"
          fill="var(--kp-teks-sekunder, #1E293B)"
        >
          {val}
        </text>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Sub-komponen: Tabel Per Paket
// ---------------------------------------------------------------------------

function TabelPerPaket({ data }: { data: StatistikPerPaket[] }) {
  if (data.length === 0) return <div className={gaya.kosong}>Belum ada data paket.</div>;
  return (
    <div className={gaya.gulir}>
      <table className={gaya.tabel}>
        <thead>
          <tr>
            <th>Paket Tryout</th>
            <th>Total Sesi</th>
            <th>User Unik</th>
            <th>Rata Skor</th>
            <th>Tingkat Lulus</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.paketId}>
              <td>
                <div className={gaya.namaPaket}>{p.judul}</div>
                <div className={gaya.idPaket}>{p.paketId}</div>
              </td>
              <td className={gaya.tdAngka}>{p.totalSesi.toLocaleString("id-ID")}</td>
              <td className={gaya.tdAngka}>{p.userUnik}</td>
              <td>
                <span
                  className={gaya.skorBadge}
                  style={{
                    background:
                      p.rataSkor >= 75
                        ? "rgba(16,185,129,.12)"
                        : p.rataSkor >= 55
                        ? "rgba(245,158,11,.12)"
                        : "rgba(239,68,68,.12)",
                    color:
                      p.rataSkor >= 75
                        ? "#047857"
                        : p.rataSkor >= 55
                        ? "#92400E"
                        : "#B91C1C",
                  }}
                >
                  {p.rataSkor}%
                </span>
              </td>
              <td>
                <div className={gaya.lulusBarWrap}>
                  <div className={gaya.lulusBar}>
                    <div
                      className={gaya.lulusBarFill}
                      style={{
                        width: p.lulusRate + "%",
                        background: p.lulusRate >= 50 ? "#10B981" : "#F59E0B",
                      }}
                    />
                  </div>
                  <span className={gaya.lulusPersen}>{p.lulusRate}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-komponen: Tabel Semua User
// ---------------------------------------------------------------------------

function TabelSemuaUser({
  data,
  expanded,
  onToggle,
}: {
  data: StatistikUser[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const tampil = expanded ? data : data.slice(0, 10);

  if (data.length === 0) return <div className={gaya.kosong}>Belum ada user yang tryout.</div>;

  return (
    <>
      <div className={gaya.gulir}>
        <table className={gaya.tabel}>
          <thead>
            <tr>
              <th>#</th>
              <th>UID</th>
              <th>Sesi</th>
              <th>Paket</th>
              <th>Skor Tertinggi</th>
              <th>Rata Skor</th>
              <th>Lulus</th>
              <th>Terakhir Tryout</th>
            </tr>
          </thead>
          <tbody>
            {tampil.map((u, idx) => (
              <tr key={u.uid}>
                <td className={gaya.tdNomor}>{idx + 1}</td>
                <td>
                  <span className={gaya.uid} title={u.uid}>
                    {u.uid.slice(0, 8)}…
                  </span>
                </td>
                <td className={gaya.tdAngka}>{u.totalSesi}</td>
                <td className={gaya.tdAngka}>{u.paketDikerjakan.length}</td>
                <td>
                  <span
                    className={gaya.skorBadge}
                    style={{
                      background:
                        u.skorTertinggi >= 75
                          ? "rgba(16,185,129,.12)"
                          : u.skorTertinggi >= 55
                          ? "rgba(245,158,11,.12)"
                          : "rgba(239,68,68,.12)",
                      color:
                        u.skorTertinggi >= 75
                          ? "#047857"
                          : u.skorTertinggi >= 55
                          ? "#92400E"
                          : "#B91C1C",
                    }}
                  >
                    {u.skorTertinggi}%
                  </span>
                </td>
                <td className={gaya.tdAngka}>{u.skorRataRata}%</td>
                <td className={gaya.tdAngka}>
                  {u.lulusCount}/{u.totalSesi}
                </td>
                <td>
                  <div className={gaya.loginInfo}>
                    <span className={gaya.loginRelatif}>
                      {waktuRelatif(u.terakhirTryout)}
                    </span>
                    <span className={gaya.catatan}>
                      {u.terakhirTryout
                        ? FORMAT_TANGGAL_PANJANG.format(
                            new Date(u.terakhirTryout),
                          )
                        : "-"}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 10 && (
        <button className={gaya.tombolExpand} onClick={onToggle}>
          {expanded
            ? "Tampilkan lebih sedikit"
            : `Tampilkan semua ${data.length} pengguna`}
        </button>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Komponen utama
// ---------------------------------------------------------------------------

export function AdminTryoutDashboard() {
  const [loading, setLoading] = useState(true);
  const [galat, setGalat] = useState("");
  const [dokumen, setDokumen] = useState<DokumenPaket[]>([]);
  const [diperbarui, setDiperbarui] = useState("");
  const [tabelExpanded, setTabelExpanded] = useState(false);
  const [tabAktif, setTabAktif] = useState<
    "ringkasan" | "subdivisi" | "paket" | "pengguna"
  >("ringkasan");

  const FORMAT_JAM = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const muat = useCallback(async () => {
    setLoading(true);
    setGalat("");
    try {
      const docs = await ambilSemuaDokumenPaket();
      setDokumen(docs);
      setDiperbarui(FORMAT_JAM.format(new Date()));
    } catch (e) {
      setGalat((e as Error).message);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    muat();
  }, [muat]);

  const statistik = useMemo(() => hitungStatistik(dokumen), [dokumen]);

  // ---- Render ----
  return (
    <div className={gaya.wadah}>
      {/* Header */}
      <div className={gaya.header}>
        <div>
          <h1 className={gaya.judul}>
            <span className={gaya.ikonJudul}>📊</span>
            Dashboard Hasil Tryout
          </h1>
          <p className={gaya.sub}>
            Statistik agregat seluruh akun yang pernah mengerjakan tryout CBT
            UKNPDPD. Data dibaca langsung dari Firestore.
            {diperbarui ? " Dimuat pukul " + diperbarui + "." : ""}
          </p>
        </div>
        <button
          className={gaya.tombolMuat}
          onClick={muat}
          disabled={loading}
        >
          {loading ? "Memuat…" : "Muat ulang"}
        </button>
      </div>

      {/* Error state */}
      {galat && (
        <div className={gaya.galat}>
          <strong>Gagal memuat data.</strong> Pastikan Firestore Rules sudah
          diperbarui untuk mengizinkan admin membaca{" "}
          <code>tryoutHistory</code> dan <code>users</code>.
          <div className={gaya.galatPesan}>{galat}</div>
        </div>
      )}

      {/* Loading state */}
      {loading && !galat && (
        <div className={gaya.kosong}>Mengambil data dari Firestore…</div>
      )}

      {/* Empty state */}
      {!loading && !galat && statistik.totalUserAktif === 0 && (
        <div className={gaya.kosong}>
          Belum ada pengguna yang pernah mengerjakan tryout.
        </div>
      )}

      {/* Konten utama */}
      {!loading && !galat && statistik.totalUserAktif > 0 && (
        <>
          {/* KPI Cards */}
          <div className={gaya.kpiGrid}>
            <KpiCard
              angka={statistik.totalUserAktif}
              label="Peserta aktif"
              aksenWarna="#2563EB"
              sub="pernah ≥ 1 kali tryout"
            />
            <KpiCard
              angka={statistik.totalSesi.toLocaleString("id-ID")}
              label="Total sesi dikerjakan"
              aksenWarna="#7C3AED"
              sub="dari semua akun"
            />
            <KpiCard
              angka={statistik.rataSkor}
              satuan="%"
              label="Rata-rata skor"
              aksenWarna={statistik.rataSkor >= 75 ? "#10B981" : "#F59E0B"}
              sub={statistik.rataSkor >= 75 ? "Di atas passing grade" : "Di bawah passing grade"}
            />
            <KpiCard
              angka={statistik.lulusRate}
              satuan="%"
              label="Tingkat kelulusan"
              aksenWarna={statistik.lulusRate >= 50 ? "#10B981" : "#EF4444"}
              sub={`${Math.round((statistik.lulusRate / 100) * statistik.totalSesi)} dari ${statistik.totalSesi} sesi lulus`}
            />
          </div>

          {/* Tab navigasi */}
          <div className={gaya.tabBar}>
            {(
              [
                { key: "ringkasan", label: "Tren & Distribusi" },
                { key: "subdivisi", label: "Per Subdivisi" },
                { key: "paket", label: "Per Paket" },
                { key: "pengguna", label: "Per Pengguna" },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                className={
                  gaya.tabBtn + (tabAktif === t.key ? " " + gaya.tabAktif : "")
                }
                onClick={() => setTabAktif(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab: Tren & Distribusi */}
          {tabAktif === "ringkasan" && (
            <div className={gaya.chartsGrid}>
              <div className={gaya.chartCard}>
                <div className={gaya.chartHead}>
                  <h3 className={gaya.chartTitle}>Distribusi Skor</h3>
                  <p className={gaya.chartDesc}>
                    Sebaran skor seluruh sesi. Batang hijau = lulus (≥75%).
                  </p>
                </div>
                <HistogramSkor data={statistik.distribusiSkor} />
              </div>

              <div className={gaya.chartCard}>
                <div className={gaya.chartHead}>
                  <h3 className={gaya.chartTitle}>Tren Sesi Harian (30 hari)</h3>
                  <p className={gaya.chartDesc}>
                    Jumlah sesi tryout per hari dalam 30 hari terakhir.
                  </p>
                </div>
                <TrenHarianChart data={statistik.trenHarian} />
              </div>
            </div>
          )}

          {/* Tab: Per Subdivisi */}
          {tabAktif === "subdivisi" && (
            <div className={gaya.chartCard}>
              <div className={gaya.chartHead}>
                <h3 className={gaya.chartTitle}>Akurasi Per Subdivisi SKDI</h3>
                <p className={gaya.chartDesc}>
                  Persentase jawaban benar agregat semua pengguna per subdivisi.
                  Urut dari yang paling lemah agar area prioritas belajar terlihat jelas.
                </p>
              </div>
              <BarChartSubdivisi data={statistik.subdivisiAggregate} />
            </div>
          )}

          {/* Tab: Per Paket */}
          {tabAktif === "paket" && (
            <div className={gaya.chartCard}>
              <div className={gaya.chartHead}>
                <h3 className={gaya.chartTitle}>Statistik Per Paket Tryout</h3>
                <p className={gaya.chartDesc}>
                  Ringkasan partisipasi dan performa per paket soal.
                </p>
              </div>
              <TabelPerPaket data={statistik.perPaket} />
            </div>
          )}

          {/* Tab: Per Pengguna */}
          {tabAktif === "pengguna" && (
            <div className={gaya.chartCard}>
              <div className={gaya.chartHead}>
                <h3 className={gaya.chartTitle}>Daftar Pengguna</h3>
                <p className={gaya.chartDesc}>
                  {statistik.semuaUsers.length} pengguna yang pernah tryout,
                  diurutkan dari yang paling baru aktif.
                </p>
              </div>
              <TabelSemuaUser
                data={statistik.semuaUsers}
                expanded={tabelExpanded}
                onToggle={() => setTabelExpanded((v) => !v)}
              />
            </div>
          )}

          <p className={gaya.catatanKaki}>
            Data dibaca langsung dari Firestore oleh browser admin — daftar uid
            dari koleksi <code>users</code>, lalu data tryout per uid secara paralel.
            UID pengguna disingkat di tabel; data jawaban per soal (<code>jawabanUser</code>)
            tidak ditampilkan meski ikut terunduh. Untuk skala besar (&gt;200 user),
            pertimbangkan migrasi ke Opsi B (API Route + Admin SDK).
          </p>
        </>
      )}
    </div>
  );
}
