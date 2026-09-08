import type { PaketTryOut } from "../types";

export const PAKET_PREDIKSI_JITU_6: PaketTryOut = {
  id: "drill-pediatri-prediksi-jitu-6",
  slug: "drill-pediatri-prediksi-jitu-6",
  judul: "Try Out UKNPDPD Pediatri — Paket 6 (Prediksi Jitu 25 Soal)",
  deskripsi:
    "Infeksi Tropis, Nutrisi & Metabolik, Tumbuh Kembang, dan Kardiologi Pediatri",
  durasiMenit: 25,
  passingGradePersen: 66,
  kategori: "uknpdpd",
  kategoriLabel: "Prediksi Jitu UKNPDPD",
  badge: "25 Soal / 25 Menit",
  daftarSoal: [
    {
      id: "pj6-soal-01",
      nomor: 1,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki usia 9 tahun dibawa orang tuanya ke IGD RS karena keluhan demam sejak 2 hari. Demam tinggi disertai nyeri kepala dan nyeri sendi dan otot. Pemeriksaan tanda vital didapatkan tekanan darah 105/75 mmHg, Nadi 94 kali/menit, Laju Napas 24 kali/menit, Suhu 38.5°C. Pemeriksaan fisik didapatkan petekie pada ekstremitas, hepar dan lien tidak teraba, lain-lain dalam batas normal. Pada pemeriksaan laboratorium ditemukan Hb 12,5 g/dL, Ht 40%, Leukosit 3000/µL, Trombosit 98.000/µL.",
      pertanyaan: "Apakah diagnosis pasien?",
      opsi: [
        { id: "a", teks: "Dengue Fever" },
        { id: "b", teks: "DHF grade 1" },
        { id: "c", teks: "DHF grade 2" },
        { id: "d", teks: "DHF grade 3" },
        { id: "e", teks: "DHF grade 4" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Demam akut, nyeri kepala/mialgia, leukopenia, trombositopenia, dan petekie tanpa bukti klinis kebocoran plasma sesuai Dengue Fever (Demam Dengue). Pada fase awal, hematokrit belum tentu meningkat dan diagnosis dapat bersifat klinis-epidemiologis dengan pemeriksaan antigen NS1 atau serologi sesuai hari sakit.",
      referensi: "WHO Guidelines on Dengue Clinical Management 2025; IDAI Pedoman Infeksi Dengue.",
      linkAlatTerkait: {
        label: "Kalkulator Cairan Resusitasi & Rumatan",
        href: "/preview/cairan",
      },
    },
    {
      id: "pj6-soal-02",
      nomor: 2,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Anak perempuan usia 7 tahun dibawa orang tuanya ke dokter dengan keluhan demam disertai nyeri sendi dan gusi berdarah sejak 3 hari yang lalu. Demam tinggi terus-menerus, turun dengan obat penurun panas namun demam naik lagi setelahnya. Pemeriksaan fisik didapatkan Nadi 105 kali/menit, tekanan darah 100/70 mmHg, Laju Napas 20 kali/menit, Suhu axilla 39 °C, petekie di lengan kiri bawah. Hasil laboratorium darah didapatkan Hb 11 g/dL, Ht 46%, Leukosit 3.800/µL, Trombosit 90.000/µL.",
      pertanyaan: "Apakah diagnosis pasien?",
      opsi: [
        { id: "a", teks: "DHF grade 1" },
        { id: "b", teks: "DHF grade 2" },
        { id: "c", teks: "DHF grade 3" },
        { id: "d", teks: "DHF grade 4" },
        { id: "e", teks: "DSS" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Pada klasifikasi dengue konvensional (WHO 1997/2011), trombositopenia (<100.000/µL) disertai kebocoran plasma/hemokonsentrasi (Ht 46%) dan perdarahan spontan (gusi berdarah) diklasifikasikan sebagai DHF (DBD) Grade 2. Catatan klinis terkini: WHO 2025 tidak lagi mengutamakan sistem grading I–IV, melainkan penilaian warning signs dan severe dengue; tanpa syok atau kegagalan organ berat, severe dengue belum dapat ditegakkan.",
      referensi: "WHO Dengue Guidelines 2025; Pedoman Diagnosis dan Tata Laksana Infeksi Dengue IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Cairan Resusitasi & Rumatan",
        href: "/preview/cairan",
      },
    },
    {
      id: "pj6-soal-03",
      nomor: 3,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak umur 7 tahun diantar oleh ibu ke IGD RS dengan penurunan kesadaran sejak 30 menit sebelum dibawa ke IGD RS. Riwayat demam sejak 4 hari yang lalu. Keluar darah dari hidung 1 hari yang lalu. Pada pemeriksaan didapatkan tekanan darah tidak terukur, denyut nadi sulit teraba, akral dingin. Hasil laboratorium didapatkan Hb 16,2 g/dL, Ht 49%, Leukosit 1.400/µL, Trombosit 22.000/µL.",
      pertanyaan: "Apakah diagnosis pasien?",
      opsi: [
        { id: "a", teks: "Demam Dengue" },
        { id: "b", teks: "DBD Grade I" },
        { id: "c", teks: "DBD Grade II" },
        { id: "d", teks: "DBD Grade III" },
        { id: "e", teks: "DBD Grade IV" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Tekanan darah tidak terukur, denyut nadi sulit/tidak teraba, dan akral dingin menunjukkan profound circulatory shock. Pada klasifikasi dengue lama, kondisi ini sesuai DBD Grade IV (Dengue Shock Syndrome tipe profound shock). Dalam klasifikasi WHO modern, fokus utamanya adalah Severe Dengue with Shock akibat kebocoran plasma masif, dengan tata laksana utama resusitasi cairan kristaloid cepat terukur dan pemantauan ketat.",
      referensi: "WHO Dengue Guidelines 2025; Pedoman Pelayanan Medis IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Cairan Resusitasi & Rumatan",
        href: "/preview/cairan",
      },
    },
    {
      id: "pj6-soal-04",
      nomor: 4,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki 8 tahun dengan berat badan 20 kg, datang dengan keluhan demam tinggi 8 hari, BAB cair 2 kali sehari. Anak juga mengeluhkan perutnya terasa tidak nyaman namun masih mau dan bisa untuk makan dan minum. Pada pemeriksaan didapatkan kesadaran baik, suhu tubuh 38.9°C, nadi 84 kali/menit, laju napas 22 kali/menit, didapatkah lidah kotor.",
      pertanyaan: "Apakah tatalaksana yang paling tepat pada pasien tersebut?",
      opsi: [
        { id: "a", teks: "Rawat jalan, obat penurun panas, vitamin" },
        { id: "b", teks: "Rawat jalan, antibiotik oral, obat penurun panas" },
        { id: "c", teks: "Rawat inap dan obat penurun panas" },
        { id: "d", teks: "Rawat inap, infus cairan, dan antibiotik per injeksi" },
        { id: "e", teks: "Rawat inap dan infus cairan" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Demam 8 hari disertai gejala gastrointestinal (lidah kotor, perut tidak nyaman) dan kondisi umum masih baik (dapat makan/minum, tanpa tanda dehidrasi berat, tanpa toksisitas) sesuai dengan demam tifoid tanpa komplikasi. Pasien dapat dirawat jalan dengan antibiotik oral (kloramfenikol, amoksisilin, kotrimoksazol, sefiksim, atau azitromisin), antipiretik, hidrasi adekuat, dan edukasi tanda bahaya.",
      referensi: "WHO AWaRe Antibiotic Book; Panduan Praktik Klinis Demam Tifoid IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-05",
      nomor: 5,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki 9 tahun dibawa ibunya ke puskesmas dengan keluhan muncul benjolan di pipi kiri sejak 5 hari yang lalu, semakin lama semakin membesar, nyeri dan disertai demam hilang timbul. Pada pemeriksaan fisik didapatkan nadi 110 kali/menit, napas 20 kali/menit, suhu 38.5°C. Didapatkan massa pada preaurikuler sampai mandibula sinistra, kenyal, batas tidak tegas dan nyeri tekan. Pasien mengaku di sekolahnya banyak teman-temannya yang mengalami keluhan serupa.",
      pertanyaan: "Apakah tatalaksana yang tepat pada kasus tersebut?",
      opsi: [
        { id: "a", teks: "parasetamol" },
        { id: "b", teks: "NSAID" },
        { id: "c", teks: "steroid" },
        { id: "d", teks: "Antibiotik" },
        { id: "e", teks: "Antivirus" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Pembengkakan nyeri pada regio parotis (preaurikuler hingga mandibula), demam, dan riwayat kontak serupa di sekolah mendukung parotitis epidemika (mumps), suatu infeksi virus paramyxovirus. Terapi utama bersifat suportif: analgesik-antipiretik seperti parasetamol, hidrasi adekuat, makanan lunak, dan istirahat. Antibiotik tidak bermanfaat pada infeksi virus tanpa superinfeksi bakteri.",
      referensi: "CDC Mumps Clinical Guidance; Nelson Textbook of Pediatrics Ch. 278.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-06",
      nomor: 6,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak usia 7 tahun dibawa oleh ibunya ke puskesmas dengan keluhan demam 3 hari ini disertai munculnya bintil-bintil kemerahan berisi cairan yang tersebar di kaki, tangan, area pantat dan bibir. Anak tampak rewel dan nafsu makan menurun. Dari pemeriksaan fisik didapatkan exanthema multiple di area pantat dan telapak tangan serta telapak kaki berupa makula eritema disertai vesikel dasar kemerahan dan enantema di mukosa buccal dan orificium oris.",
      pertanyaan: "Apakah diagnosis kasus tersebut?",
      opsi: [
        { id: "a", teks: "Mumps" },
        { id: "b", teks: "Varicella zoster" },
        { id: "c", teks: "Herpes Zoster" },
        { id: "d", teks: "HFMD" },
        { id: "e", teks: "Miliaria" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Vesikel pada telapak tangan, telapak kaki, area bokong, serta enantema/ulserasi oral membentuk pola khas Hand-Foot-and-Mouth Disease (HFMD). Penyakit ini paling sering disebabkan oleh Coxsackievirus A16 atau Enterovirus A71. Penanganan utama bersifat suportif dengan hidrasi adekuat dan analgesik-antipiretik.",
      referensi: "WHO Hand, Foot and Mouth Disease; Nelson Textbook of Pediatrics Ch. 277.",
      linkAlatTerkait: {
        label: "Pedoman Klinis Pediatri",
        href: "/preview/guideline",
      },
    },
    {
      id: "pj6-soal-07",
      nomor: 7,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Anak perempuan berusia 6 tahun dibawa ibunya ke klinik dokter umum dengan keluhan muncul bercak merah di seluruh tubuh. Keluhan disertai batuk pilek yang sudah dirasakan 2 hari ini. Anak juga merasakan mata sedikit tidak nyaman dan merah. Pada pemeriksaan fisik didapatkan nadi 98 kali/menit, frekuensi napas 24 kali/menit, suhu 37,9°C.",
      pertanyaan: "Apakah kemungkinan diagnosis pasien ini?",
      opsi: [
        { id: "a", teks: "Kawasaki disease" },
        { id: "b", teks: "Measles" },
        { id: "c", teks: "Roseola" },
        { id: "d", teks: "Rubella" },
        { id: "e", teks: "Demam scarlet" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Campak (Measles / Morbili) ditandai oleh fase prodromal demam disertai batuk (cough), pilek (coryza), dan konjungtivitis (conjunctivitis) — trias 3C klasik — yang diikuti oleh timbulnya ruam makulopapular eritematosa yang menyebar secara kraniokaudal dari wajah ke seluruh tubuh. Suplementasi vitamin A dosis tinggi merupakan bagian terapi wajib.",
      referensi: "WHO Measles Fact Sheet & Guidelines; IDAI Rekomendasi Imunisasi.",
      linkAlatTerkait: {
        label: "Panduan Imunisasi Anak IDAI",
        href: "/preview/imunisasi",
      },
    },
    {
      id: "pj6-soal-08",
      nomor: 8,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki laki usia 12 tahun datang dibawa orang tua nya dengan keluhan demam sejak 5 hari yang lalu. Demam dirasakan pada malam hari disertai nyeri kepala, lemah, lesu, mual, nafsu makan menurun dan diare. Keluhan muncul setelah berpergian ke Danau Lindu Sulawesi Tengah bersama keluarga. Pemeriksaan fisik tanda vital dalam batas normal. Didapatkan nyeri tekan abdomen, lain-lain tidak ada kelainan. Hasil pemeriksaan feses penderita ditemukan gambaran telur cacing dengan tonjolan lateral kecil (rudimentary lateral knob).",
      pertanyaan: "Apakah etiologi penyakit pasien?",
      opsi: [
        { id: "a", teks: "Ascariasis lumbricoides" },
        { id: "b", teks: "Trichuris trichuria" },
        { id: "c", teks: "Ancylostoma duodenale" },
        { id: "d", teks: "Schistosoma japonicum" },
        { id: "e", teks: "Schistosoma mansoni" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Danau Lindu dan Lembah Napu di Sulawesi Tengah merupakan daerah endemis spesifik Schistosomiasis di Indonesia dengan etiologi Schistosoma japonicum. Gejala demam Katayama akut meliputi demam, menggigil, nyeri abdomen, mual, diare, dan eosinofilia. Telur S. japonicum berbentuk bulat-lonjong dengan tonjolan/knob lateral rudimenter. Terapi lini pertama adalah Prazikuantel.",
      referensi: "WHO Schistosomiasis; Kemenkes RI Pedoman Eradikasi Schistosomiasis.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-09",
      nomor: 9,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Anak laki-laki usia 6 tahun datang dibawa ibunya ke dokter dengan keluhan gatal pada area anus terutama pada malam hari. Pemeriksaan fisik didapatkan nadi 100 kali/menit, laju napas 22 kali/menit, suhu 36,9°C. Kemudian dilakukan pemeriksaan anal swab dan didapatkan gambaran telur dengan bentuk planoconvex.",
      pertanyaan: "Apa diagnosis yang tepat?",
      opsi: [
        { id: "a", teks: "Ascariasis" },
        { id: "b", teks: "Infeksi cacing pita" },
        { id: "c", teks: "trichiurasis" },
        { id: "d", teks: "Infeksi cacing tambang" },
        { id: "e", teks: "Enterobiasis" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Pruritus ani nokturnal (gatal perianal memburuk pada malam hari saat cacing betina bermigrasi ke anus untuk bertelur) dengan temuan mikroskopis telur berbentuk asimetris datar pada satu sisi (planokonveks) pada anal tape/swab adalah patognomonik untuk Enterobiasis (infeksi Enterobius vermicularis / cacing kremi). Terapi lini pertama: Pirantel pamoat, Albendazol, atau Mebendazol diulang 2 minggu kemudian.",
      referensi: "CDC Pinworm; Nelson Textbook of Pediatrics Ch. 331.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-10",
      nomor: 10,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki, usia 10 tahun, datang dibawa ibunya ke Poliklinik dengan keluhan BAB keluar cacing. Keluhan disertai rasa tidak nyaman di perut, mual, dan muntah. Pemeriksaan fisik didapatkan gizi kurang. Pemeriksaan darah lengkap didapatkan Hb 12 g/dL, Leukosit 7.200/µL, Trombosit 250.000/µL, dengan eosinophil 15%. Pemeriksaan feses didapatkan gambaran telur cacing berdinding tebal bergelombang (mamillated).",
      pertanyaan: "Apakah diagnosis yang paling tepat?",
      opsi: [
        { id: "a", teks: "Ascariasis" },
        { id: "b", teks: "Infeksi cacing pita" },
        { id: "c", teks: "trichiurasis" },
        { id: "d", teks: "Infeksi cacing tambang" },
        { id: "e", teks: "Enterobiasis" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Cacing gilig yang keluar spontan bersama feses disertai keluhan gastrointestinal, malnutrisi, eosinofilia (15%), dan telur berdinding tebal kasar bergelombang (mamillated) pada feses adalah patognomonik untuk Ascariasis (Ascaris lumbricoides). Pengobatan lini pertama adalah Albendazol 400 mg dosis tunggal atau Pirantel pamoat.",
      referensi: "CDC Ascariasis; WHO Helminth Control in School-Age Children.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-11",
      nomor: 11,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak usia 8 tahun datang dengan keluhan bengkak pada kaki kanan sekitar 1 bulan, kaki sakit dan terasa berat. Anak tersebut tinggal di daerah endemis filaria.",
      pertanyaan: "Apakah pemeriksaan penunjang yang tepat?",
      opsi: [
        { id: "a", teks: "Darah lengkap pada saat demam" },
        { id: "b", teks: "Analisa cairan limfatik pada malam hari" },
        { id: "c", teks: "Analisa cairan limfatik pada pagi hari" },
        { id: "d", teks: "Hapusan darah tepi pada malam hari" },
        { id: "e", teks: "Hapusan darah tepi pada pagi hari" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Filaria limfatik di Indonesia (Wuchereria bancrofti, Brugia malayi, Brugia timori) umumnya memiliki sifat periodisitas nokturnal, di mana mikrofilaria baru aktif keluar ke sirkulasi darah tepi pada malam hari (sekitar pukul 22.00 - 02.00). Oleh karena itu, sediaan darah tebal atau hapusan darah tepi pada malam hari adalah metode diagnostik standar yang paling sensitif.",
      referensi: "WHO Lymphatic Filariasis; Kemenkes RI Pedoman Eliminasi Filariasis.",
      linkAlatTerkait: {
        label: "Panel Interpretasi Lab Pediatri",
        href: "/preview/lab",
      },
    },
    {
      id: "pj6-soal-12",
      nomor: 12,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Anak laki-laki usia 11 tahun dibawa ke puskesmas karena mual dan nyeri perut sejak 1 minggu yang lalu. Pasien juga tampak lemah, nafsu makan menurun, dan beberapa kali ada diare. Akhir-akhir ini pasien merasa berat badannya turun. Keluarga pasien sering menyantap daging babi yang dimasak kurang matang. Pada pemeriksaan fisik didapatkan TTV dalam batas normal, konjungtiva anemis (-), sklera ikterik (-). Pada pemeriksaan mikroskopik feses didapatkan gambaran telur dan proglotid.",
      pertanyaan: "Apakah infeksi penyebab keluhan tersebut?",
      opsi: [
        { id: "a", teks: "Taenia solium" },
        { id: "b", teks: "Taenia saginata" },
        { id: "c", teks: "Schistosomiasis" },
        { id: "d", teks: "Ascariasis" },
        { id: "e", teks: "Hookworm" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Riwayat konsumsi daging babi kurang matang dan ditemukannya telur/proglotid taenia pada feses menunjang taeniasis oleh Taenia solium (cacing pita babi). Sebagai pembanding, Taenia saginata ditularkan lewat daging sapi. Pentingnya penegakan T. solium adalah pencegahan komplikasi sistiserkosis bila terjadi autoinfeksi telur cacing.",
      referensi: "CDC Taeniasis; Nelson Textbook of Pediatrics Ch. 336.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-13",
      nomor: 13,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki usia 6 tahun datang diantar ibunya ke poliklinik dengan keluhan diare disertai lendir dan darah. Keluhan dirasakan sejak 2 minggu yang lalu dan ibu pasien mengatakan pasien selalu menangis tiap kali BAB karena kesakitan. Pada pemeriksaan feses didapatkan gambaran telur berbentuk lonjong dan pada kedua ujung terdapat bentuk seperti tutup botol.",
      pertanyaan: "Apakah komplikasi yang dapat ditimbulkan?",
      opsi: [
        { id: "a", teks: "Prolaps rekti" },
        { id: "b", teks: "Malabsorbsi" },
        { id: "c", teks: "Anemia" },
        { id: "d", teks: "Mual" },
        { id: "e", teks: "Löffler syndrome" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Telur berbentuk tempayan/lonjong dengan kedua ujung memiliki sumbat jernih (bipolar clear mucoid plugs / seperti tutup botol) adalah ciri khas Trichuris trichiura (cacing cambuk). Infeksi berat pada anak menyebabkan trikuriasis berat dengan kolitis disentrik dan komplikasi khas Prolaps Rekti (penonjolan mukosa rektum) akibat diare kronik dan tenesmus berulang.",
      referensi: "CDC Trichuriasis; Nelson Textbook of Pediatrics Ch. 330.",
      linkAlatTerkait: {
        label: "Pedoman Klinis Pediatri",
        href: "/preview/guideline",
      },
    },
    {
      id: "pj6-soal-14",
      nomor: 14,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki berusia 1 tahun dibawa oleh orang tuanya karena berat badannya tidak mau meningkat walaupun sudah diberikan makan secara teratur dan batuk yang tidak sembuh selama 1 bulan disertai demam selama 3 minggu. Sehari-hari, pasien diasuh oleh neneknya yang ternyata baru diketahui menderita TB paru. Pasien juga tidak memiliki riwayat imunisasi BCG sebelumnya. Uji tuberculin pada pasien menunjukkan reaksi positif sebesar 12 mm. Pasien belum pernah mendapat pengobatan TB sebelumnya.",
      pertanyaan: "Apa regimen pengobatan yang tepat?",
      opsi: [
        { id: "a", teks: "2 RHZE/4 RH" },
        { id: "b", teks: "2 RHZ/4 RH" },
        { id: "c", teks: "2 RH/4 RH" },
        { id: "d", teks: "2 RHZE/6 RH" },
        { id: "e", teks: "2 RHZE/10 RH" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Kunci B mengikuti regimen standar TB paru anak sensitif obat di Indonesia: 2 bulan fase intensif RHZ (Rifampisin, Isoniazid, Pirazinamid) diikuti 4 bulan fase lanjutan RH (2RHZ / 4RH). Catatan pedoman terbaru: WHO kini merekomendasikan opsi regimen 4 bulan (2HRZ(E)/2HR) untuk TB paru non-severe pada anak usia 3 bulan – 16 tahun yang memenuhi kriteria, sedangkan kasus TB berat tetap menggunakan regimen 6 bulan dengan etambutol.",
      referensi: "WHO TB Children 2022+; Petunjuk Teknis TB Anak Kemenkes RI.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-15",
      nomor: 15,
      subdivisi: "infeksi-tropis",
      subdivisiLabel: "Infeksi-Tropis",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak laki-laki usia 3 tahun dibawa ibunya karena batuk sejak 3 minggu yang lalu terutama pada malam menjelang dini hari. Batuk selalu didapatkan setiap makan cokelat. Ibu pasien khawatir karena nenek pasien yang mengasuh sehari-hari mengalami batuk darah dan didiagnosis tuberkulosa. BB anak 18,5 kg. Pemeriksaan fisik dalam batas normal. Hasil uji tuberkulin indurasi 8 mm.",
      pertanyaan: "Apakah tatalaksana yang akan berikan?",
      opsi: [
        { id: "a", teks: "Profilaksis sekunder" },
        { id: "b", teks: "Profilaksis primer" },
        { id: "c", teks: "Pengobatan OAT" },
        { id: "d", teks: "Antibiotik empiris" },
        { id: "e", teks: "Obat simptomatis" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Kunci B menggunakan istilah klasik 'Profilaksis primer' (diberikan pada anak balita kontak erat dengan pasien TB paru menular untuk mencegah infeksi dan progresi menjadi sakit TB). Pada konsensus modern (WHO & Kemenkes RI), seluruh pemberian pencegahan ini digolongkan sebagai Terapi Pencegahan Tuberkulosis (TPT). Sebelum TPT dimulai, evaluasi untuk menyingkirkan penyakit TB aktif mutlak dilakukan terlebih dahulu.",
      referensi: "Petunjuk Teknis TPT Kemenkes RI; WHO TB Preventive Treatment Guidelines.",
      linkAlatTerkait: {
        label: "Kalkulator Dosis Obat Pediatri",
        href: "/preview/dosis",
      },
    },
    {
      id: "pj6-soal-16",
      nomor: 16,
      subdivisi: "nutrisi-metabolik",
      subdivisiLabel: "Nutrisi-Metabolik",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak perempuan berusia 18 bulan dirujuk dari Posyandu ke Puskesmas karena tampak lemah dan tidak mau menyusu. Keluhan dirasakan sejak 3 hari yang lalu. Anak juga mengalami penurunan nafsu makan. Sehari-hari anak hanya diberikan ASI. Pemeriksaan Antropometri didapatkan PB/U antara 0 dan -2 SD, BB/U dan BB/PB antara -2 dan -3 SD. Pada pemeriksaan fisik anak tampak pucat dengan edema pitting pada kedua punggung kaki, rambut jagung (+).",
      pertanyaan: "Apakah diagnosis pada pasien ini?",
      opsi: [
        { id: "a", teks: "Gizi kurang" },
        { id: "b", teks: "Gizi buruk" },
        { id: "c", teks: "Gizi baik" },
        { id: "d", teks: "Stunted" },
        { id: "e", teks: "Developmental delay" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Ditemukannya edema pitting bilateral simetris pada tungkai secara otomatis mengklasifikasikan anak ke dalam Severe Acute Malnutrition (Gizi Buruk / tipe Kwashiorkor), tanpa memandang nilai Z-score BB/PB (-2 sampai -3 SD). Rambut jagung yang rapuh, pucat, dan anoreksia memperkuat status malnutrisi berat yang memerlukan tata laksana komprehensif sesuai fase stabilisasi.",
      referensi: "WHO Severe Acute Malnutrition Guidelines; Buku Bagan Tata Laksana Anak Gizi Buruk Kemenkes RI.",
      linkAlatTerkait: {
        label: "Kalkulator Gizi & Antropometri WHO",
        href: "/preview/antropometri",
      },
    },
    {
      id: "pj6-soal-17",
      nomor: 17,
      subdivisi: "nutrisi-metabolik",
      subdivisiLabel: "Nutrisi-Metabolik",
      tingkatSKDI: "4A",
      vignette:
        "Ibu membawa anaknya usia 5 tahun ke dokter dengan keluhan penurunan kesadaran. Riwayat anak tidak mau minum susu, hanya makan sedikit dan minum air kacang hijau. Pemeriksan fisik anak tampak lemas dan sulit dibangunkan, iga gambang, baggy pants. Kesadaran apatis, nadi 80 kali/menit, laju napas 24 kali/menit, suhu 36,5 °C.",
      pertanyaan: "Apakah penatalaksanaan awal yang tepat?",
      opsi: [
        { id: "a", teks: "Larutan D5% oral 50 cc" },
        { id: "b", teks: "Larutan D10% oral 50 cc" },
        { id: "c", teks: "Rehidrasi dengan resomal" },
        { id: "d", teks: "Berikan makanan tambahan F75" },
        { id: "e", teks: "Larutan D10% 5 cc/kgBB bolus IV" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Anak dengan gizi buruk berat (tanda marasmus: iga gambang, baggy pants) yang mengalami penurunan kesadaran (apatis/letargis/sulit dibangunkan) harus dicurigai kuat mengalami hipoglikemia berat (Langkah 1 dari 10 Langkah Tata Laksana Gizi Buruk WHO). Bila anak tidak sadar atau letargis dan akses IV terpasang, berikan bolus Dextrose 10% (D10%) intravena 5 mL/kgBB segera, dilanjutkan infus glukosa rumatan dan formula F-75.",
      referensi: "WHO Management of Severe Malnutrition; Pedoman Pelayanan Medis IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Cairan Resusitasi & Rumatan",
        href: "/preview/cairan",
      },
    },
    {
      id: "pj6-soal-18",
      nomor: 18,
      subdivisi: "nutrisi-metabolik",
      subdivisiLabel: "Nutrisi-Metabolik",
      tingkatSKDI: "4A",
      vignette:
        "Seorang anak perempuan umur 3 tahun dibawa oleh ibunya ke Puskesmas dengan kondisi lemas. Badan anak tampak sangat kurus. Ibu pasien mengeluhkan anak sering mengalami diare dan demam. Anak tidak suka minum susu dan makan hanya sedikit setiap harinya. Pemeriksaan fisik anak rewel, tampak wajah seperti orang tua, iga gambang, perut buncit didapatkan asites, edema pada kedua kaki.",
      pertanyaan: "Bagaimana tatalaksana pemberian nutrisi yang tepat?",
      opsi: [
        { id: "a", teks: "F-100 pada fase stabilisasi dan F-75 pada fase rehabilitasi" },
        { id: "b", teks: "F-75 pada fase stabilisasi dan F-100 pada fase rehabilitasi" },
        { id: "c", teks: "F-75 dan F-100 mulai pada fase stabilisasi" },
        { id: "d", teks: "F-75 dan F-100 mulai pada fase rehabilitasi" },
        { id: "e", teks: "F-75 dan F-100 mulai pada fase tindak lanjut" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Pada tata laksana anak gizi buruk (marasmus-kwashiorkor), prinsip pemberian nutrisi dilakukan bertahap: Pada fase stabilisasi digunakan F-75 (formula rendah protein dan energi: 75 kkal dan 0,9 g protein/100 mL) untuk menghindari refeeding syndrome dan beban kerja organ vital. Setelah stabil, edema menghilang, dan nafsu makan pulih, anak beralih ke fase rehabilitasi dengan F-100 (100 kkal dan 2,9 g protein/100 mL) atau RUTF untuk mengejar pertumbuhan (catch-up growth).",
      referensi: "WHO Severe Acute Malnutrition Guidelines; Kemenkes RI Buku Bagan Anak Gizi Buruk.",
      linkAlatTerkait: {
        label: "Kalkulator Kalori & Protein Pediatri",
        href: "/preview/nutrisi",
      },
    },
    {
      id: "pj6-soal-19",
      nomor: 19,
      subdivisi: "nutrisi-metabolik",
      subdivisiLabel: "Nutrisi-Metabolik",
      tingkatSKDI: "4A",
      vignette:
        "Anak perempuan usia 4 tahun datang di antar ibunya periksa ke dokter dengan keluhan badan lemas dan perut membuncit sejak 3 bulan terakhir. Pemeriksaan fisik didapatkan kulit keriput, iga gambang, ascites dan edema tungkai. Hasil plotting kurva WHO BB/TB menunjukkan Z score < -3SD.",
      pertanyaan: "Perbaikan nutrisi apa yang paling tepat untuk pasien ini?",
      opsi: [
        { id: "a", teks: "Karbohidrat" },
        { id: "b", teks: "Protein" },
        { id: "c", teks: "Karbohidrat-Protein" },
        { id: "d", teks: "Vit. B6" },
        { id: "e", teks: "Lemak Jenuh" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Z-score BB/TB < -3 SD disertai kulit keriput, iga gambang, asites, dan edema tungkai menunjukkan severe acute malnutrition tipe marasmik-kwashiorkor. Perbaikan nutrisi tidak bisa hanya berfokus pada satu makronutrien tunggal; dibutuhkan kombinasi sumber energi adekuat (karbohidrat) untuk mencegah katabolisme bersama protein bernilai biologis tinggi untuk sintesis albumin dan jaringan baru secara terukur dan bertahap.",
      referensi: "WHO Severe Acute Malnutrition Guidelines; Nelson Textbook of Pediatrics Ch. 60.",
      linkAlatTerkait: {
        label: "Kalkulator Kalori & Protein Pediatri",
        href: "/preview/nutrisi",
      },
    },
    {
      id: "pj6-soal-20",
      nomor: 20,
      subdivisi: "nutrisi-metabolik",
      subdivisiLabel: "Nutrisi-Metabolik",
      tingkatSKDI: "4A",
      vignette:
        "Anak laki-laki usia 8 tahun datang diantar orang tuanya dengan keluhan badan gemuk. Riwayat pasien makan dengan porsi yang sangat banyak dan suka minuman manis. Pasien juga jarang aktivitas fisik. Dari pemeriksaan fisik didapatkan wajah dan pipi bulat, perut bergelambir, buried penis, tungkai berbentuk huruf X. Pemeriksaan antropometri didapatkan BB/TB 150%, IMT/U >P95.",
      pertanyaan: "Apakah tatalaksana yang paling tepat dilakukan?",
      opsi: [
        { id: "a", teks: "Pengurangan jumlah dan frekuensi makan" },
        { id: "b", teks: "Pemberian obat orlistat" },
        { id: "c", teks: "Dilakukan operasi bariatrik" },
        { id: "d", teks: "Diet rendah kalori" },
        { id: "e", teks: "Diet sesuai RDA dengan metode food rules" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Pada anak usia 8 tahun dengan obesitas (IMT/U > P95), fondasi tatalaksana lini pertama adalah intervensi gaya hidup intensif ramah keluarga: diet seimbang sesuai RDA (Recommended Dietary Allowance) yang diterapkan dengan 'food rules / feeding rules' (jadwal makan teratur 3 kali makan utama dan 2 kali selingan sehat, tidak makan sambil menonton gawai, hindari minuman manis berkalori tinggi), peningkatan aktivitas fisik harian minimal 60 menit, dan pengurangan waktu layar (screen time).",
      referensi: "AAP Obesity Clinical Practice Guideline 2023; Rekomendasi Obesitas IDAI.",
      linkAlatTerkait: {
        label: "Kalkulator Gizi & Antropometri WHO",
        href: "/preview/antropometri",
      },
    },
    {
      id: "pj6-soal-21",
      nomor: 21,
      subdivisi: "tumbuh-kembang",
      subdivisiLabel: "Tumbuh-Kembang",
      tingkatSKDI: "4A",
      vignette:
        "Bayi perempuan dibawa ibunya ke puskesmas untuk pemeriksaan rutin. Pada pemeriksaan fisik ditemukan anak sudah mampu duduk posisi tripod, dan menggenggam bolpoint. Saat diajak bermain, anak dapat menirukan \"ci..luk..ba\" dan mengeluarkan suara \"ma..taa..daa\", namun anak masih belum bisa berdiri.",
      pertanyaan: "Berapakah perkiraan usia anak yang paling tepat?",
      opsi: [
        { id: "a", teks: "12 bulan" },
        { id: "b", teks: "9 bulan" },
        { id: "c", teks: "7 bulan" },
        { id: "d", teks: "3 bulan" },
        { id: "e", teks: "1 bulan" },
      ],
      jawabanBenar: "c",
      pembahasan:
        "Milestone perkembangan: duduk posisi tripod (menopang badan dengan tangan ke depan) dicapai pada usia 6–7 bulan, menggenggam benda (palmar grasp) usia 5–6 bulan, babbling suku kata ganda ('ma-ta-da') serta bermain interaktif cilukba (peek-a-boo) berkembang pada rentang 6–8 bulan. Belum dapat berdiri sendiri adalah normal pada usia ini. Dari pilihan yang ada, usia 7 bulan adalah perkiraan yang paling tepat.",
      referensi: "WHO / CDC Developmental Milestones; IDAI Buku Ajar Tumbuh Kembang.",
      linkAlatTerkait: {
        label: "Skrining Denver II & KPSP",
        href: "/preview/perkembangan",
      },
    },
    {
      id: "pj6-soal-22",
      nomor: 22,
      subdivisi: "tumbuh-kembang",
      subdivisiLabel: "Tumbuh-Kembang",
      tingkatSKDI: "4A",
      vignette:
        "Anak perempuan usia 12 bulan datang diantar kedua orang tuanya karena belum bisa merangkak, anak belum bisa mengambil benda-benda kecil dengan jarinya, anak belum bisa bicara, jika dipanggil anak tidak menoleh dan jika anak menginginkan sesuatu hanya dapat menangis. Pemeriksaan telinga dan mata dalam batas normal.",
      pertanyaan: "Apa diagnosis yang tepat?",
      opsi: [
        { id: "a", teks: "Global Developmental Delay" },
        { id: "b", teks: "Autisme" },
        { id: "c", teks: "Speech delay" },
        { id: "d", teks: "Gangguan motoric" },
        { id: "e", teks: "Tuli sensorineural" },
      ],
      jawabanBenar: "a",
      pembahasan:
        "Keterlambatan bermakna yang melibatkan dua atau lebih domain perkembangan utama (motorik kasar: belum bisa merangkak; motorik halus: belum mampu pincer grasp; bahasa-bicara: belum bicara; personal-sosial: tidak menoleh saat dipanggil) pada anak berusia di bawah 5 tahun diklasifikasikan sebagai Global Developmental Delay (GDD). Pasien memerlukan rujukan evaluasi komprehensif neurologis, metabolik, dan genetik.",
      referensi: "AAP Developmental Surveillance; Nelson Textbook of Pediatrics Ch. 44.",
      linkAlatTerkait: {
        label: "Skrining Denver II & KPSP",
        href: "/preview/perkembangan",
      },
    },
    {
      id: "pj6-soal-23",
      nomor: 23,
      subdivisi: "tumbuh-kembang",
      subdivisiLabel: "Tumbuh-Kembang",
      tingkatSKDI: "4A",
      vignette:
        "Seorang ibu membawa anaknya yang berusia 14 bulan ke Puskesmas mengeluh tumbuh kembang anaknya lebih lambat dan lebih kecil dibanding dengan anak-anak seusianya. Setelah dilakukan pengecekan dengan tabel KPSP, didapatkan skor KPSP 8.",
      pertanyaan: "Tindakan apa yang dapat dilakukan?",
      opsi: [
        { id: "a", teks: "Rujuk ke dokter spesialis anak" },
        { id: "b", teks: "Rujuk untuk rawat inap" },
        { id: "c", teks: "Normal" },
        { id: "d", teks: "Kontrol kembali untuk evaluasi ulang dalam 2 minggu" },
        { id: "e", teks: "Rujuk ke psikolog anak" },
      ],
      jawabanBenar: "d",
      pembahasan:
        "Berdasarkan pedoman SDIDTK (Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang) Kemenkes RI, skor KPSP 7–8 dikategorikan sebagai 'Perkembangan Meragukan' (M). Tindakan yang tepat adalah memberikan konseling stimulasi terarah kepada orang tua untuk melatih aspek perkembangan yang belum tercapai selama 2 minggu, lalu menjadwalkan pemeriksaan ulang KPSP 2 minggu kemudian dengan kuesioner yang sama.",
      referensi: "Buku Pedoman Pelaksanaan SDIDTK Kemenkes RI; Buku KIA.",
      linkAlatTerkait: {
        label: "Skrining Denver II & KPSP",
        href: "/preview/perkembangan",
      },
    },
    {
      id: "pj6-soal-24",
      nomor: 24,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi Pediatri",
      tingkatSKDI: "3B",
      vignette:
        "Seorang bayi laki-laki berusia 6 hari dibawa ke IGD oleh ibunya dengan keluhan sesak nafas yang semakin memberat dan sulit minum sejak usia 3 hari. Pada pemeriksaan fisik didapatkan kesadaran bayi alert, laju napas 62 kali/menit, suhu 36 °C, denyut nadi dan perfusi ekstremitas bawah tidak teraba sedangkan ekstremitas atas normal, ekstremitas atas tampak lebih merah dibandingkan ektremitas bawah. Pemeriksaan auskultasi jantung didapatkan S2 mengeras, bising ejeksi sistolik lembut di linea parasternal kiri atas. Pemeriksaan rontgen tampak jantung sedikit membesar dan edema paru.",
      pertanyaan: "Apa diagnosis pasien ini?",
      opsi: [
        { id: "a", teks: "TakayashuDisease" },
        { id: "b", teks: "Coarctation of Aorta" },
        { id: "c", teks: "Double Outlet Right Ventricle" },
        { id: "d", teks: "Patent Ductus Arteriosus" },
        { id: "e", teks: "Transposition of Great Arteries" },
      ],
      jawabanBenar: "b",
      pembahasan:
        "Sesak napas dan perburukan klinis pada neonatus hari ke-3 hingga ke-6 pasca lahir saat duktus arteriosus mulai menutup, disertai perbedaan pulsasi dan perfusi (denyut nadi dan perfusi tungkai bawah tidak teraba/pucat sedangkan ekstremitas atas normal dan kemerahan), sangat khas untuk Koarktasio Aorta Kritis (Critical Coarctation of the Aorta). Terapi medikamentosa darurat adalah infus Prostaglandin E1 (PGE1) untuk membuka kembali duktus arteriosus sebelum perbaikan bedah definitif.",
      referensi: "AHA/ACC Congenital Heart Disease Guidelines; Park's Pediatric Cardiology Ch. 14.",
      linkAlatTerkait: {
        label: "Pedoman Klinis Pediatri",
        href: "/preview/guideline",
      },
    },
    {
      id: "pj6-soal-25",
      nomor: 25,
      subdivisi: "kardiologi",
      subdivisiLabel: "Kardiologi Pediatri",
      tingkatSKDI: "3B",
      vignette:
        "Anak laki-laki usia 5 tahun dibawa orang tuanya karena kedua kaki terlihat pucat sejak 2 hari yang lalu. Keluhan tidak disertai dengan demam. Pada pemeriksaan didapatkan tekanan darah di kedua tangan 100/70 mmHg dan pada kedua kaki didapatkan 60/40 mmHg. Pulsasi nadi tibialis anterior dan dorsalis pedis teraba lemah dan terlambat dibandingkan dengan suara jantung saat auskultasi. Kedua kaki tampak pucat dan terlihat lebih kecil dibandingkan proporsi tubuhnya.",
      pertanyaan: "Apakah kemungkinan gambaran X-ray yang akan didapat?",
      opsi: [
        { id: "a", teks: "Snowman shaped" },
        { id: "b", teks: "Boot shaped" },
        { id: "c", teks: "Egg on a string" },
        { id: "d", teks: "Figure of \"8\"" },
        { id: "e", teks: "Figure of \"3\"" },
      ],
      jawabanBenar: "e",
      pembahasan:
        "Gradien tekanan darah yang besar antara ekstremitas atas dan bawah (tangan lebih tinggi dari kaki), denyut nadi femoral/pedis yang lemah dan terlambat (radio-femoral delay), serta tungkai yang hipotrofik menegakkan diagnosis Koarktasio Aorta. Gambaran radiologis foto toraks yang khas pada anak adalah kontur 'Figure of 3' sign pada batas kiri mediastinum/aorta akibat dilatasi pre- dan post-stenosis, serta takik kosta (rib notching) akibat pembesaran arteri interkostalis kolateral.",
      referensi: "Park's Pediatric Cardiology for Practitioners; AHA/ACC Congenital Heart Disease.",
      linkAlatTerkait: {
        label: "Pedoman Klinis Pediatri",
        href: "/preview/guideline",
      },
    },
  ],
};
