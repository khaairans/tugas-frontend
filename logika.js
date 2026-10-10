// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan: daftar item (array of objects)
// keluaran: jumlah item yang berstatus true
// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// Normal: jika ada 7 item bernilai true maka hasilnya 7
// Kasus tepi: daftar kosong [] maka hasilnya 0
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. siapkan penghitung dan mulai dari 0
// 2. untuk tiap item di daftar: 
// 3. kalau status item bernilai true, tambah penghitung 1
// 4. kembalikan penghitung
// LANGKAH 4 — TERJEMAHKAN
function hitungTersedia(daftar) {
  let jumlah = 0;
  for (const item of daftar) {
    // memeriksa data dengan === true untuk menghindari error jika tipe datanya berupa teks atau tipe data lain
    if (item.tersedia === true) { 
      jumlah = jumlah + 1;
    }
  }
  return jumlah;
}

console.log("F1 normal :", hitungTersedia(daftarItem));
console.log("F1 kosong :", hitungTersedia([])); // harus menampilkan 0

// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────
