import type { PaketTryOut } from "../types";

export const PAKET_PREDIKSI_JITU_5: PaketTryOut = {
  id: "drill-pediatri-prediksi-jitu-5",
  slug: "drill-pediatri-prediksi-jitu-5",
  judul: "Try Out UKNPDPD Pediatri — Paket 5 (Prediksi Jitu 25 Soal)",
  deskripsi:
    "Neonatologi & Perinatologi, Respirologi Anak, dan Kardiologi Pediatri",
  durasiMenit: 25,
  passingGradePersen: 66,
  kategori: "uknpdpd",
  kategoriLabel: "Prediksi Jitu UKNPDPD",
  badge: "25 Soal / 25 Menit",
  daftarSoal: [
    {
      id: "pj5-soal-01",
      nomor: 1,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Seorang bayi laki-laki lahir pervaginam usia kehamilan 35 minggu di RS. Bayi lahir tidak menangis spontan dan tonus otot jelek. Telah dilakukan penanganan awal oleh dokter. Kemudian dievaluasi, bayi belum bernapas spontan, tampak sianosis, dan laju denyut jantung 80 kali/menit. Dokter memutuskan untuk melakukan VTP,namun saat dilakukan VTP dada tidak mengembang sempurna.",
      pertanyaan: "Apakah tindakan selanjutnya?",
      opsi: [
        { id: "a", teks: "Melakukan koreksi VTP" },
        { id: "b", teks: "Melakukan kompresi dada" },
        { id: "c", teks: "Melakukan VTP + kompresi" },
        { id: "d", teks: "Memberikan epinephrine" },
        { id: "e", teks: "Melakukan intubasi endotrakea" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Pada resusitasi neonatus, bila ventilasi tekanan positif sudah dimulai tetapi dada tidak mengembang dan denyut jantung tetap <100/menit, lakukan ventilation corrective steps (langkah koreksi VTP: SRI / MR. SOPA: Sungkup lekat, Reposisi kepala, Isap lendir, Buka mulut, Tekanan dinaikkan, Alternatif jalan napas). Kompresi dada hanya dilakukan setelah VTP adekuat dan efektif selama 30 detik tetapi denyut jantung tetap <60/menit.",
      referensi: "AHA/AAP Neonatal Resuscitation 2025.",
      linkAlatTerkait: {
        label: "Tools Neonatus & Perinatologi",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-02",
      nomor: 2,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi baru lahir secara SC dari ibu G1P0Ab0 usia kehamilan 38 minggu. Bayi tidak menangis dan tampak lemah. Didapatkan ketuban hijau keruh berbau. Pemeriksaan fisik ditemukan sianosis, retraksi dinding dada dan hipotoni.",
      pertanyaan: "Apakah tatalaksana yang tepat?",
      opsi: [
        { id: "a", teks: "Hangatkan di bawah infant warmer dan isap lendir jalan napas" },
        { id: "b", teks: "Isap lendir jalan napas hingga bersih" },
        { id: "c", teks: "Hangatkan di bawah infant warmer" },
        { id: "d", teks: "Bersihkan jalan napas dengan suction kateter" },
        { id: "e", teks: "Lakukan penghisapan mulut-trakea dan segera lakukan intubasi" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Kunci E merupakan pola klasik pada bank soal ujian terdahulu. Pada panduan NRP modern (AHA/AAP 2025): pengisapan trakeal dan intubasi rutin tidak lagi direkomendasikan secara rutin baik pada bayi bugar maupun tidak bugar. Pendekatan kini difokuskan pada penilaian inisial dan ventilasi tekanan positif (VTP) segera bila bayi tidak bernapas/gasping atau HR < 100/menit.",
      referensi: "AHA/AAP Neonatal Resuscitation 2025; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Tools Neonatus & Perinatologi",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-03",
      nomor: 3,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi baru lahir dilaporkan dari Ruang Perina bayi terlihat biru, gerakan tangan dan kaki terlihat jarang. Bayi usia kehamilan 34 minggu. Pada pemeriksaan fisik didapatkan gerak bayi jarang, merintih, nadi 80 kali/menit, suhu 36,7°C, laju napas 50 kali/menit irreguler, lemah, dan sianosis pada akral.",
      pertanyaan: "Apakah interpretasi APGAR score pada bayi tersebut?",
      opsi: [
        { id: "a", teks: "Normal" },
        { id: "b", teks: "Mild Asphyxia" },
        { id: "c", teks: "Moderate Asphyxia" },
        { id: "d", teks: "Severe Asphyxia" },
        { id: "e", teks: "Very Severe Asphyxia" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Skor APGAR dihitung dari 5 elemen: Appearance (akral biru = 1), Pulse (HR 80 < 100 = 1), Grimace (merintih/lemah = 1), Activity (gerak jarang/ekstremitas fleksi sedikit = 1), Respiration (napas ireguler/lemah = 1). Total skor adalah 5, yang secara klinis diinterpretasikan dalam rentang asfiksia ringan-sedang (Mild-Moderate Asphyxia, skor 4–6).",
      referensi: "AAP Apgar Score; AHA/AAP NRP 2025.",
      linkAlatTerkait: {
        label: "Skor APGAR & Evaluasi Asfiksia",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-04",
      nomor: 4,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Seorang bayi laki-laki usia 3 hari datang bersama kedua orang tuanya ke IGD RS dengan keluhan sesak napas. Bayi lahir spontan di dukun beranak pada usia kehamilan 31 minggu. Berat badan lahir 1500 gram. Pada pemeriksaan fisik didapatkan sianosis (+), retraksi (+), pernapasan cuping hidung (+). Dokter menyarankan untuk dilakukan pemeriksaan rontgen thorax.",
      pertanyaan: "Apakah gambaran yang mungkin ditemukan pada kasus diatas?",
      opsi: [
        { id: "a", teks: "Infiltrat alveolar dan konsolidasi homogen" },
        { id: "b", teks: "Patchy infiltrat" },
        { id: "c", teks: "Reticulogranular pattern" },
        { id: "d", teks: "Gambaran garis-garis kasar" },
        { id: "e", teks: "Streaky, perihilar linear densities" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Bayi prematur 31 minggu dengan berat lahir 1.500 g yang mengalami distres napas progresif (sianosis, retraksi, cuping hidung) sangat khas menderita Respiratory Distress Syndrome (RDS) / Hyaline Membrane Disease akibat defisiensi surfaktan. Gambaran radiologis klasik pada rontgen toraks adalah reticulogranular pattern (ground-glass appearance) difus bilateral disertai air bronchogram.",
      referensi: "European RDS Guideline; Nelson Textbook of Pediatrics Ch. 128.",
      linkAlatTerkait: {
        label: "Evaluasi Distres Napas (Downes Score)",
        href: "/preview/skoring",
      },
    },
    {
      id: "pj5-soal-05",
      nomor: 5,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Bayi usia 2 hari lahir spontan dari ibu G1P0Ab0 usia kehamilan 30 minggu. Bayi tampak sesak dan lemah. Pemeriksaan fisik ditemukan bayi tampak sesak, Nadi 150 kali/menit, laju napas 70 kali/menit, Suhu 37 °C. Ketuban jernih, didapatkan retraksi dinding dada, ronki seluruh lapang paru. Dari hasil x-ray, dokter mengatakan kolaps seluruh lapang paru.",
      pertanyaan: "Derajat berapakah penyakit pada bayi tersebut?",
      opsi: [
        { id: "a", teks: "1" },
        { id: "b", teks: "2" },
        { id: "c", teks: "3" },
        { id: "d", teks: "4" },
        { id: "e", teks: "5" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Pada klasifikasi radiologis RDS (sistem grading Bomsel): Derajat 1: retikulogranular halus dengan aerasi masih baik; Derajat 2: retikulogranular difus dengan air bronchogram melebihi siluet jantung; Derajat 3: batas jantung dan diafragma mulai kabur; Derajat 4 (white-out lung): opasifikasi total seluruh lapang paru dengan kolaps alveolar masif dan hilangnya batas jantung serta diafragma.",
      referensi: "Nelson Textbook of Pediatrics; Neonatal RDS References.",
      linkAlatTerkait: {
        label: "Skor Downes & Evaluasi RDS",
        href: "/preview/skoring",
      },
    },
    {
      id: "pj5-soal-06",
      nomor: 6,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Bayi baru lahir spontan dari ibu G1P0Ab0 usia kehamilan 37-38 minggu. Bayi tampak sesak dan lemah, serta sianosis. Bayi tidak didapatkan demam. Pemeriksaan fisik ditemukan retraksi dinding dada serta ketuban hijau berbau.",
      pertanyaan: "Apakah penyebab keluhan pada bayi tersebut?",
      opsi: [
        { id: "a", teks: "Menghisap ketuban" },
        { id: "b", teks: "Defisiensi surfaktan" },
        { id: "c", teks: "Proses fisiologis" },
        { id: "d", teks: "Cairan paru yang tidak keluar" },
        { id: "e", teks: "Infeksi" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Ketuban hijau keruh/berbau pada kehamilan aterm disertai distres napas dan sianosis tanpa demam mengarah pada Sindrom Aspirasi Mekonium (Meconium Aspiration Syndrome / MAS) akibat terhirup atau terisapnya cairan ketuban yang terkontaminasi mekonium. Partikel mekonium menyebabkan obstruksi mekanik jalan napas perifer, atelektasis, pneumonitis kimiawi, dan disfungsi surfaktan sekunder.",
      referensi: "AHA/AAP Neonatal Resuscitation 2025; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Tools Neonatus & Perinatologi",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-07",
      nomor: 7,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi usia 1 hari dari ibu G1P0Ab0 usia kehamilan 37 minggu, bayi menangis, gerak aktif, dan mau menetek kuat. Riwayat ibu menderita kencing manis. Dari pemeriksaan fisik didapatkan keadaan umum baik, nadi 120 kali/menit, laju napas 50 kali/menit, suhu 36,2 °C. BB 4300 gram, gula darah sewaktu 20 mg/dL.",
      pertanyaan: "Apakah tatalaksana yang tepat?",
      opsi: [
        { id: "a", teks: "Bolus D10% 2cc/kgBB" },
        { id: "b", teks: "Bolus D40% 2cc/kgBB" },
        { id: "c", teks: "Infus D10% 6mg/kgBB" },
        { id: "d", teks: "Berikan ASI lebih sering" },
        { id: "e", teks: "Berikan larutan air gula" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Bayi besar dari ibu diabetes (Infant of Diabetic Mother, BB 4.300 g) dengan kadar glukosa darah 20 mg/dL mengalami hipoglikemia neonatal berat (< 25 mg/dL). Tata laksana emergensi yang tepat adalah pemberian mini-bolus Dextrose 10% (D10) 2 mL/kgBB IV perlahan, diikuti infus rumatan glukosa D10 dengan GIR (Glucose Infusion Rate) 6–8 mg/kg/menit serta evaluasi kadar gula darah berkala.",
      referensi: "AAP Clinical Report: Postnatal Glucose Homeostasis in Late-Preterm and Term Infants; IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Glukosa & Infus Pediatri",
        href: "/preview/cairan",
      },
    },
    {
      id: "pj5-soal-08",
      nomor: 8,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Bayi laki-laki berusia 3 bulan dibawa UGD RS oleh ibunya karena keluhan kuning yang muncul sejak bayi berusia 1 bulan. Bayi juga dikeluhkan air kencing berwarna seperti teh dan feses putih dempul. Keluhan juga disertai penurunan BB. Pemeriksaan tanda vital didapatkan denyut nadi 134 kali/menit, suhu 37,8°C dan frekuensi napas 36 kali/menit, kedua mata ikterik, hepar teraba membesar, ikterus Kramer IV. Pada pemeriksaan laboratorium didapatkan bilirubin total 14 mg/dL, bilirubin direk 6 mg/dL, bilirubin indirek 8 mg/dL.",
      pertanyaan: "Pada pemeriksaan penunjang, gambaran apa yang akan didapatkan?",
      opsi: [
        { id: "a", teks: "Groundglass appearance" },
        { id: "b", teks: "Cairan bebas di cavum peritoneal" },
        { id: "c", teks: "Massa hepar" },
        { id: "d", teks: "Triangular cord sign" },
        { id: "e", teks: "Sausage sign" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Ikterus sejak usia 1 bulan, feses akolik (putih dempul), urin berwarna teh, hepatomegali, dan hiperbilirubinemia direk (kolestasis) sangat mengarah ke Atresia Bilier. Pada pemeriksaan ultrasonografi abdomen, tanda penunjang diagnostik patognomonik adalah Triangular Cord Sign (massa fibrotik berbentuk segitiga di anterior vena porta). Kondisi ini memerlukan intervensi bedah portoenterostomi Kasai dini (< 60 hari) untuk prognosis optimal.",
      referensi: "NASPGHAN / ESPGHAN Guidelines on Neonatal Cholestasis; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Kalkulator Bilirubin & Fototerapi",
        href: "/preview/bilirubin",
      },
    },
    {
      id: "pj5-soal-09",
      nomor: 9,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi laki-laki usia 5 hari, dibawa ke dokter oleh ibunya karena kuning sejak 3 hari yang lalu. Pasien diberikan ASI, dan kuat menetek. Pada pemeriksaan didapatkan gerak bayi aktif, ikterus Kramer II, golongan darah ibu dan bayi keduanya O Rh (+). Hasil laboratorium didapatkan Bilirubin total 10 mg/dL, Bilirubin Indirek 9 mg/dL, Bilirubin Direk 1 mg/dL.",
      pertanyaan: "Apakah tatalaksana yang paling tepat?",
      opsi: [
        { id: "a", teks: "Observasi dan teruskan ASI" },
        { id: "b", teks: "Medikamentosa" },
        { id: "c", teks: "Transfusi tukar" },
        { id: "d", teks: "Fototerapi" },
        { id: "e", teks: "Suportif" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Kuning yang muncul pada hari ke-3 kehidupan (setelah 24 jam) dengan bilirubin total 10 mg/dL predominan indirek pada usia 5 hari, bayi aktif, refleks hisap kuat, dan tanpa inkompatibilitas golongan darah (ibu dan bayi sama-sama O Rh+) adalah gambaran ikterus fisiologis / breastfeeding jaundice ringan. Nilai ini masih berada di bawah ambang batas fototerapi kurva AAP 2022. Tatalaksana yang tepat adalah observasi klinis dan teruskan pemberian ASI secara adekuat.",
      referensi: "AAP Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn Infant 2022.",
      linkAlatTerkait: {
        label: "Kalkulator Bilirubin & Fototerapi",
        href: "/preview/bilirubin",
      },
    },
    {
      id: "pj5-soal-10",
      nomor: 10,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Bayi perempuan usia 14 hari dibawa ke IGD RS dirujuk dari Puskesmas karena keluhan badannya kuning yang tidak kunjung hilang sejak pasien baru lahir. Tidak ada keluhan demam. BAB dan BAK warna normal. Riwayat pasien mendapat ASI dan susu formula. Namun satu hari ini pasien mulai tampak lemas dan malas menetek. Pemeriksaan fisik tanda vital dalam batas normal, sklera ikterik, kuning dari kepala hingga lipat paha.",
      pertanyaan: "Apakah komplikasi yang dapat terjadi pasien?",
      opsi: [
        { id: "a", teks: "Obstruksi bilier" },
        { id: "b", teks: "Kernikterik" },
        { id: "c", teks: "Penyakit liver kronik" },
        { id: "d", teks: "Kolestasis" },
        { id: "e", teks: "Sepsis" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Ikterus berkepanjangan disertai tanda bahaya neurotoksisitas akut seperti lemas (letargi) dan malas menetek (poor feeding) merupakan ancaman terjadinya ensefalopati bilirubin akut yang dapat berujung pada Kernikterus (deposisi bilirubin indirek tak terkonjugasi di ganglia basalis otak dan batang otak yang menyebabkan palsi serebral koreoatetoid, gangguan pendengaran sensoneural, dan keterlambatan perkembangan permanen).",
      referensi: "AAP Hyperbilirubinemia Guidelines 2022; NASPGHAN Cholestasis Guidance.",
      linkAlatTerkait: {
        label: "Kalkulator Bilirubin & Fototerapi",
        href: "/preview/bilirubin",
      },
    },
    {
      id: "pj5-soal-11",
      nomor: 11,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi laki-laki usia 8 hari dibawa ibunya ke RS dengan keluhan lemas dan malas menetek sejak 1 hari ini. Pasien dikeluhkan demam tinggi sejak 3 hari yang lalu. Riwayat lahir normal dibantu bidan, cukup bulan, berat lahir normal. Pemeriksaan fisik bayi tampak lemas, nadi 170 kali/menit, suhu 38 °C, tampak umbilikus kemerahan dan keluar pus. Hasil lab darah Hb 15 g/dL, leukosit 30.000/µL, trombosit 345.000/µL.",
      pertanyaan: "Apakah diagnosis pasien?",
      opsi: [
        { id: "a", teks: "Icterus neonatorum" },
        { id: "b", teks: "Sepsis neonatorum" },
        { id: "c", teks: "Hipotiroid Kongenital" },
        { id: "d", teks: "ISK" },
        { id: "e", teks: "Tetanus neonatorum" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Kombinasi demam (38°C), letargi/lemas, nafsu menyusu menurun drastis, takikardia (HR 170/menit), leukositosis berat (30.000/µL), dan fokus infeksi lokal supuratif pada tali pusat (omfalitis dengan pus) pada usia 8 hari (>72 jam pascalahir) menegakkan diagnosis Sepsis Neonatorum Awitan Lambat (Late Onset Sepsis / LOS).",
      referensi: "AAP Red Book; WHO Newborn Sepsis Management Guidelines.",
      linkAlatTerkait: {
        label: "Tools Neonatus & Perinatologi",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-12",
      nomor: 12,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3B",
      vignette:
        "Seorang bayi laki-laki usia 2 hari dirujuk oleh bidan ke RS karena badan kaku, tidak mau menyusu, mulut kaku. Riwayat bayi lahir ditolong dukun beranak. Pemeriksaan fisik didapatkan tonus otot spasme, trismus dan pada umbilicus bayi tercium bau busuk dan tampak ada pus.",
      pertanyaan: "Apakah antibiotik yang dapat diberikan?",
      opsi: [
        { id: "a", teks: "metronidazol" },
        { id: "b", teks: "amoksisilin" },
        { id: "c", teks: "Kotrimoxazole" },
        { id: "d", teks: "Eritromicin" },
        { id: "e", teks: "Ciprofloxacin" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Gejala trismus (mulut kaku, kesulitan menyusu), spasme otot menyeluruh, dan tali pusat terinfeksi/bernanah pada bayi pasca-persalinan non-steril oleh dukun beranak sangat khas untuk Tetanus Neonatorum akibat Clostridium tetani. Metronidazol merupakan antibiotik pilihan utama untuk eradikasi bakteri Clostridium tetani karena tidak memiliki efek antagonisme kompetitif terhadap GABA, berbeda dengan penisilin.",
      referensi: "WHO Tetanus Guidance; Nelson Textbook of Pediatrics Ch. 245.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosing",
      },
    },
    {
      id: "pj5-soal-13",
      nomor: 13,
      subdivisi: "neonatologi",
      subdivisiLabel: "Neonatologi",
      tingkatSKDI: "3A",
      vignette:
        "Seorang bayi laki-laki usia 3 minggu dibawa ke RS dengan keluhan ukuran kepala dirasa lebih besar dari ukuran normal. Riwayat anak lahir dari ibu P3A0 UK 34 minggu dengan BBL 2100 gram. Pemeriksaan fisik didapatkan lingkar kepala >2 SD grafik pertumbuhan dan hepatomegali. Pemeriksaan mata tampak adanya kelainan di segmen posterior. Dari pemeriksaan USG kepala didapat kalsifikasi intrakranial.",
      pertanyaan: "Apakah kemungkinan diagnosis anak tersebut?",
      opsi: [
        { id: "a", teks: "Cytomegalovirus kongenital" },
        { id: "b", teks: "Rubella kongenital" },
        { id: "c", teks: "Toksoplasmosis kongenital" },
        { id: "d", teks: "Tetanus neonatorum" },
        { id: "e", teks: "Sepsis neonatorum" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Trias Sabin klasik Toksoplasmosis Kongenital terdiri dari: (1) Hidrosefalus / makrosefali, (2) Kalsifikasi intrakranial difus tersebar di seluruh parenkim otak (pada CMV biasanya periventrikular), dan (3) Korioretinitis / kelainan segmen posterior mata, disertai hepatosplenomegali. Penyakit ini diakibatkan oleh transmisi transplasenta parasit protozoa Toxoplasma gondii.",
      referensi: "CDC Congenital Toxoplasmosis; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Tools Neonatus & Perinatologi",
        href: "/preview/neonatus",
      },
    },
    {
      id: "pj5-soal-14",
      nomor: 14,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Pasien anak laki-laki usia 2 tahun mengeluhkan sesak nafas dan batuk seperti menggonggong sejak 1 minggu ini. Pasien tampak gelisah karena sesak napas. Pada pemeriksaan fisik didapatkan nadi 136 kali/menit, laju napas 40 kali/menit, suhu 37,8 °C, stridor inspirasi (+). Pemeriksaan radiologi cervical AP didapatkan gambaran Steeple sign.",
      pertanyaan: "Apakah diagnosis pasien tersebut?",
      opsi: [
        { id: "a", teks: "Abses subglotis" },
        { id: "b", teks: "Sindroma Croup" },
        { id: "c", teks: "Trakeitis" },
        { id: "d", teks: "Laringitis" },
        { id: "e", teks: "Epiglotitis" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Batuk menggonggong (barking cough), stridor inspirasi, suara serak, dan penyempitan subglotis berbentuk menara gereja (Steeple sign) pada foto servikal proyeksi AP adalah temuan patognomonik Croup (Laringotrakeobronkitis akut). Etiologi tersering adalah Human Parainfluenza Virus. Tatalaksana lini pertama mencakup kortikosteroid sistemik (Deksametason 0,15–0,6 mg/kgBB dosis tunggal) dan nebulisasi epinefrin bila disertai stridor saat istirahat.",
      referensi: "AAP/WHO Respiratory Guidance; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosing",
      },
    },
    {
      id: "pj5-soal-15",
      nomor: 15,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "3B",
      vignette:
        "Anak perempuan usia 5 tahun datang ke UGD diantar keluarganya dengan keluhan sesak sejak 1 hari yang lalu. Pasien juga memiliki riwayat demam dan suara serak. Tanda vital didapatkan nadi 100 kali/menit, laju napas 36 kali/menit, suhu 39,2°C. Pemeriksaan fisik terdengar stridor saat inspirasi dan tampak retraksi intercostal. Dilakukan rontgen servikal lateral didapatkan gambaran thumb sign.",
      pertanyaan: "Apakah diagnosis pasien tersebut?",
      opsi: [
        { id: "a", teks: "Croup" },
        { id: "b", teks: "Laringitis akut" },
        { id: "c", teks: "Faringitis akut" },
        { id: "d", teks: "Epiglotitis" },
        { id: "e", teks: "Vocal nodes" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Demam tinggi akut (39,2°C), distres napas cepat, stridor inspirasi, suara serak, dan gambaran pembengkakan epiglotis menyerupai ibu jari (Thumb sign) pada rontgen servikal lateral mengonfirmasi diagnosis Epiglotitis Akut. Keadaan ini merupakan kegawatdaruratan jalan napas absolut: jangan lakukan inspeksi orofaring dengan tongue depressor karena dapat mencetuskan laringospasme total yang fatal.",
      referensi: "AAP Red Book; Pediatric Emergency Medicine Guidelines.",
      linkAlatTerkait: {
        label: "Alur Tatalaksana Gawat Napas",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-16",
      nomor: 16,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak perempuan usia 3 tahun dibawa orang tuanya ke IGD RS karena batuk berat selama 3 minggu ini. Keluhan batuk disertai muntah. Riwayat imunisasi hanya BCG. Pada pemeriksaan fisik tekanan darah 90/60 mmHg, nadi 120 kali/menit, laju napas 60 kali/menit dan suhu 36 °C. Batuk paroksismal diikuti suara whoop saat inspirasi.",
      pertanyaan: "Fase apakah yang disebut sebagai fase infeksius?",
      opsi: [
        { id: "a", teks: "Pertusis fase katarhal" },
        { id: "b", teks: "Pertusis fase inisiasi" },
        { id: "c", teks: "Pertusis fase paroksismal" },
        { id: "d", teks: "Pertusis fase kovalen" },
        { id: "e", teks: "Pertusis fase rekonvalesen" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Pertusis (batuk rejan akibat Bordetella pertussis) memiliki 3 stadium: kataral, paroksismal, dan rekonvalesen. Fase kataral (1–2 minggu pertama) memiliki gejala menyerupai selesma ringan (batuk ringan, rinorea), namun pada fase inilah densitas bakteri di sekret saluran napas paling tinggi sehingga menjadi fase yang paling infeksius (paling menular).",
      referensi: "CDC Pertussis Guidance; WHO.",
      linkAlatTerkait: {
        label: "Jadwal Imunisasi Anak",
        href: "/preview/imunisasi",
      },
    },
    {
      id: "pj5-soal-17",
      nomor: 17,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak perempuan usia 2 tahun 10 bulan dibawa orang tuanya ke IGD RS karena batuk berat selama 3 minggu ini. Keluhan batuk disertai muntah. Riwayat imunisasi hanya BCG. Pada pemeriksaan fisik tekanan darah 90/60 mmHg, nadi 120 kali/menit, laju napas 60 kali/menit dan suhu 37 °C. Batuk paroksismal diikuti suara whoop saat inspirasi.",
      pertanyaan: "Apakah terapi yang tepat pada anak tersebut?",
      opsi: [
        { id: "a", teks: "Azitromisin 10 mg/kgBB/hari selama 5 hari" },
        { id: "b", teks: "Eritromisin 40 mg/kgBB/hari selama 3 hari" },
        { id: "c", teks: "Klaritomisin 15 mg/kgBB/hari selama 14 hari" },
        { id: "d", teks: "Amoksisilin 15 mg/kgBB/hari selama 10 hari" },
        { id: "e", teks: "Cotrimoxazole 4 mg/kgBB/hari selama 7 hari" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Regimen antimikroba lini pertama pilihan untuk pertusis adalah golongan makrolid, khususnya Azitromisin dengan dosis 10 mg/kgBB/hari (maksimal 500 mg) per oral 1 kali sehari selama 5 hari. Azitromisin efektif mengeliminasi kuman Bordetella pertussis dari nasofaring dan memutus rantai transmisi dengan toleransi obat yang sangat baik pada anak.",
      referensi: "CDC Recommended Antimicrobial Agents for Pertussis; AAP Red Book.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosing",
      },
    },
    {
      id: "pj5-soal-18",
      nomor: 18,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Bayi laki-laki usia 5 bulan datang dengan keluhan sesak napas sejak 2 hari yang lalu. Keluhan diawali demam dan batuk pilek 3 hari. Pemeriksaaan fisik kesan hipertermia, didapatkan wheezing dan ronki basah nyaring pada kedua lapang paru. Pemeriksaan X-ray thoraks didapatkan hiperaerasi dan patchy infiltrate.",
      pertanyaan: "Apakah tatalaksana selanjutnya yang diberikan?",
      opsi: [
        { id: "a", teks: "Rehidrasi IV, Antibiotik, antipiretik, dan pemberian multivitamin" },
        { id: "b", teks: "Oksigen, nebul SABA, pemberian ampisilin dan paracetamol" },
        { id: "c", teks: "Oksigen, nebul SABA, pemberian steroid, dan paracetamol" },
        { id: "d", teks: "Oksigen, nebul epinefrin dan pemberian kortikosteroid" },
        { id: "e", teks: "Oksigen, pasang infus, pemberian Furosemide IV dan spironolactone" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Kasus ini menggambarkan bronkiolitis akut (infeksi saluran napas bawah tersering pada bayi < 12 bulan, umumnya oleh RSV). Pilihan C merepresentasikan opsi terapi klasik pada bank soal ujian. Catatan penting berbasis bukti modern: pedoman AAP dan WHO merekomendasikan terapi suportif murni (oksigenasi bila hipoksemia, hidrasi cairan, dan pembersihan jalan napas atas), sementara bronkodilator dan steroid tidak lagi diberikan secara rutin.",
      referensi: "WHO Bronchiolitis 2026; AAP Bronchiolitis Clinical Practice Guideline.",
      linkAlatTerkait: {
        label: "Alur Tatalaksana Gawat Napas",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-19",
      nomor: 19,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Anak perempuan usia 8 tahun datang dibawa orang tuanya ke poliklinik untuk kontrol. Pasien memiliki riwayat asma yang dipicu oleh paparan debu. Dalam seminggu terakhir, pasien sesak sebanyak 4 kali dan reda dengan menggunakan inhaler. Tidak ada batasan terhadap aktivitas sehari-hari dan gejala malam. Pemeriksaan fisik didapatkan suhu tubuh 36,8°C, laju napas 20 kali/menit, nadi 96 kali/menit.",
      pertanyaan: "Bagaimana derajat kendali asma pada anak tersebut?",
      opsi: [
        { id: "a", teks: "Tidak terkendali" },
        { id: "b", teks: "Terkendali sebagian" },
        { id: "c", teks: "Terkendali" },
        { id: "d", teks: "Persisten ringan" },
        { id: "e", teks: "Persisten sedang" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Menurut pedoman GINA dan IDAI, penilaian kontrol asma didasarkan pada 4 domain: gejala siang hari > 2 kali/minggu (positif: 4 kali), terbangun malam karena asma (negatif), kebutuhan pelega/inhaler > 2 kali/minggu (positif: 4 kali), dan keterbatasan aktivitas (negatif). Adanya 1–2 domain positif mengklasifikasikan asma sebagai Asma Terkendali Sebagian (Partly Controlled).",
      referensi: "GINA Global Strategy for Asthma Management and Prevention; IDAI.",
      linkAlatTerkait: {
        label: "Alur Tatalaksana Asma Anak",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-20",
      nomor: 20,
      subdivisi: "respirologi",
      subdivisiLabel: "Respirologi",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki usia 10 tahun dibawa keluarga ke IGD dengan keluhan sesak napas sejak 1 jam lalu. Pasien memiliki riwayat asma. Pemeriksaan tanda vital didapatkan kesadaran compos mentis, nadi 120 kali/menit, frekuensi napas 30 kali/menit, suhu 37 °C, saturasi O2 87%. Suara napas didapatkan mengi yang terdengar saat inspirasi dan ekspirasi pada auskultasi.",
      pertanyaan: "Apakah tatalaksana yang dapat diberikan pada pasien?",
      opsi: [
        { id: "a", teks: "Budesonide" },
        { id: "b", teks: "salbutamol" },
        { id: "c", teks: "salbutamol + ipratropium bromida" },
        { id: "d", teks: "Ipratropium bromida" },
        { id: "e", teks: "Terbutalin" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Saturasi oksigen 87% (< 90-92%), takipnea, takikardia, dan wheezing pada kedua fase pernapasan (inspirasi dan ekspirasi) menandakan eksaserbasi asma derajat berat. Terapi lini pertama mencakup oksigenasi target SpO2 94–98%, nebulisasi kombinasi SABA (Salbutamol) dengan antikolinergik (Ipratropium Bromida) secara berulang pada 1 jam pertama, dan pemberian kortikosteroid sistemik sedini mungkin.",
      referensi: "WHO Asthma 2026; GINA Emergency Management Guidelines; IDAI.",
      linkAlatTerkait: {
        label: "Alur Tatalaksana Asma Anak",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-21",
      nomor: 21,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi",
      tingkatSKDI: "3A",
      vignette:
        "Bayi perempuan usia 10 bulan datang dibawa ibunya ke RS dengan keluhan kebiruan pada bibir dan ujung jari. Hal ini sering dialami terutama saat pasien menangis ataupun saat bermain dan sudah terjadi sejak lahir namun makin memberat. Pada pemeriksaan didapatkan tanda vital normal, sianosis pada mukosa bibir dan ujung ekstremitas, hipertrofi ventrikel kanan dan adanya murmur ejeksi sistolik di ICS 2 kiri.",
      pertanyaan: "Apa kemunginan gambaran X-ray yang didapat?",
      opsi: [
        { id: "a", teks: "Snowman shaped" },
        { id: "b", teks: "Boot shaped" },
        { id: "c", teks: "Egg on a string" },
        { id: "d", teks: "Figure of '8'" },
        { id: "e", teks: "Figure of '3'" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Temuan klinis sianosis saat menangis/aktivitas (spells), hipertrofi ventrikel kanan, dan bising ejeksi sistolik di sela iga 2 parasternal kiri (stenosis pulmonal) mengarah ke Tetralogy of Fallot (TOF). Gambaran radiologis foto toraks klasik pada TOF adalah cor coeur en sabot atau Boot-shaped heart sign akibat apeks jantung yang terangkat ke atas oleh hipertrofi ventrikel kanan serta cekungan pada segmen arteri pulmonalis.",
      referensi: "AHA/ACC Congenital Heart Disease Guidelines; Nelson Textbook of Pediatrics Ch. 458.",
      linkAlatTerkait: {
        label: "Pedoman Penyakit Jantung Bawaan",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-22",
      nomor: 22,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi",
      tingkatSKDI: "3A",
      vignette:
        "Anak laki-laki usia 8 tahun dibawa orang tuanya ke dokter karena jari-jari pada kedua kakinya biru sejak 2 jam yang lalu. Selama ini pasien tidak pernah ada keluhan. Dulu saat lahir, pasien tidak langsung menangis. Pada pemeriksaan didapatkan sianosis pada ujung-ujung jari kedua kaki, namun pada tangan tidak diitemukan sianosis. Pada auskultasi ditemukan adanya murmur kontinyu di sela iga 2 linea parastenalis sinistra.",
      pertanyaan: "Apakah diagnosis yang paling mungkin pada pasien ini?",
      opsi: [
        { id: "a", teks: "ASD" },
        { id: "b", teks: "VSD" },
        { id: "c", teks: "PDA" },
        { id: "d", teks: "Coarctasio aorta" },
        { id: "e", teks: "Tetralogy of Fallot" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Sianosis pada ekstremitas bawah tanpa sianosis pada ekstremitas atas merupakan tanda patognomonik Differential Cyanosis yang timbul pada Patent Ductus Arteriosus (PDA) yang mengalami sindrom Eisenmenger (reversal shunt kanan-ke-kiri). Darah terdeoksigenasi dari arteri pulmonalis dialirkan melewati duktus ke aorta desendens (di sebelah distal arteri subklavia kiri), menyuplai tubuh bagian bawah sehingga tampak biru, sedangkan kepala dan lengan tetap mendapat darah kaya oksigen.",
      referensi: "AHA Congenital Heart Disease; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Pedoman Penyakit Jantung Bawaan",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-23",
      nomor: 23,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi",
      tingkatSKDI: "3A",
      vignette:
        "Bayi laki-laki usia 6 bulan dibawa ibunya ke puskesmas dengan keluhan berat badan yang sulit naik. Pasien juga dikeluhkan sering sesak namun tidak disertai kebiruan. Pada pemeriksaan fisik didapatkan nadi 100 kali/menit, laju napas 20 kali/menit, suhu 36,5 °C, murmur diastolik pada ICS 3 linea parasternalis sinistra.",
      pertanyaan: "Apakah diagnosis yang mungkin?",
      opsi: [
        { id: "a", teks: "ASD" },
        { id: "b", teks: "VSD" },
        { id: "c", teks: "PDA" },
        { id: "d", teks: "Coarctasio aorta" },
        { id: "e", teks: "Tetralogy of Fallot" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "ASD merupakan kelainan jantung bawaan nonsianotik dengan pirau kiri-ke-kanan. Pada ASD dengan pirau yang signifikan, peningkatan aliran darah melintasi katup trikuspid di diastol dapat menimbulkan rumble mid-diastolik di tepi sternum kiri bawah, di samping bising ejeksi sistolik akibat peningkatan aliran di katup pulmonal dan fixed splitting bunyi jantung kedua (S2).",
      referensi: "AHA/ACC Congenital Heart Disease Guidelines; Park's Pediatric Cardiology.",
      linkAlatTerkait: {
        label: "Pedoman Penyakit Jantung Bawaan",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-24",
      nomor: 24,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi",
      tingkatSKDI: "3A",
      vignette:
        "Anak laki-laki usia 7 bulan, dibawa oleh orang tuanya ke praktik dokter karena sering biru di ujung-ujung jari tangan dan kakinya. Selama ini anak menetek lemah dan sering tampak biru saat menetek atau menangis. Pada pemeriksaan foto thorax didapatkan gambaran boot shaped heart sign.",
      pertanyaan: "Manakah di bawah ini kelainan yang tidak ditemukan pada pasien?",
      opsi: [
        { id: "a", teks: "Overriding aorta" },
        { id: "b", teks: "Hipertrofi ventrikel kanan" },
        { id: "c", teks: "Regurgitasi trikuspid" },
        { id: "d", teks: "Defek septum ventrikel" },
        { id: "e", teks: "Stenosis pulmonal" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Gambaran boot-shaped heart sign sangat khas untuk Tetralogi Fallot (TOF). TOF terdiri dari 4 komponen defek anatomis utama: (1) Defek Septum Ventrikel (VSD), (2) Stenosis Pulmonal / RVOTO, (3) Overriding Aorta, dan (4) Hipertrofi Ventrikel Kanan (RVH). Regurgitasi trikuspid bukan merupakan kelainan primer dalam definisi sindrom tetralogi Fallot.",
      referensi: "AHA/ACC Congenital Heart Disease; Nelson Textbook of Pediatrics.",
      linkAlatTerkait: {
        label: "Pedoman Penyakit Jantung Bawaan",
        href: "/preview/alur",
      },
    },
    {
      id: "pj5-soal-25",
      nomor: 25,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi",
      tingkatSKDI: "3A",
      vignette:
        "Anak laki-laki usia 7 tahun dibawa orang tua ke dokter dengan keluhan bibir sering tampak kebiruan sejak 1 minggu terakhir, terutama setelah bermain atau berolahraga dengan teman-temannya. Tidak pernah ada keluhan biru sebelumnya, namun menurut orang tuanya, anak sering batuk-pilek hingga sesak sejak kecil. Pada pemeriksaan fisik didapatkan tekanan darah 115/70 mmHg, nadi 93 kali/menit, frekuensi napas 26 kali/menit, suhu 37 °C, pada auskultasi thorax terdengar bising sistolik pada ICS III parasternal line sinistra dan sianosis (+).",
      pertanyaan: "Apakah diagnosis anak tersebut?",
      opsi: [
        { id: "a", teks: "Tetralogy of Fallot" },
        { id: "b", teks: "Transposition of the Great Arteries" },
        { id: "c", teks: "Double Outlet Right Ventricle" },
        { id: "d", teks: "sindrom Eisenmenger" },
        { id: "e", teks: "Ventricular Septal Defect" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Perjalanan klinis dari penyakit jantung nonsianotik dengan pirau kiri-ke-kanan kronis (seperti VSD dengan bising sistolik ICS III linea parasternal kiri) yang berkembang menjadi sianotik saat beraktivitas pada usia anak lebih besar (7 tahun) menandai timbulnya Sindrom Eisenmenger. Tekanan vaskular pulmonal yang tinggi secara kronis menyebabkan remodeling vaskular dan hipertrofi dinding pembuluh darah paru hingga resistensi pulmonal melampaui resistensi sistemik dan pirau berbalik menjadi kanan-ke-kiri.",
      referensi: "AHA/ACC Adult Congenital Heart Disease; Nelson Textbook of Pediatrics Ch. 463.",
      linkAlatTerkait: {
        label: "Pedoman Penyakit Jantung Bawaan",
        href: "/preview/alur",
      },
    },
  ],
};
