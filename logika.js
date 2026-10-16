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

// LANGKAH 1 — PAHAMI
// Masukan: daftar item (array of objects) dan sebuah angka id (number)
// Keluaran: satu object item utuh yang id-nya cocok
// LANGKAH 2 — CONTOH
// Normal: id 1 ada di data maka kembalikan object id 1 tersebut
// Kasus tepi: id 99 tidak ditemukan maka kembalikan null
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. untuk tiap item di daftar:
// 2. kalau id item sama dengan id yang dicari, kembalikan item tersebut
// 3. kalau perulangan selesai dan tidak ada yang cocok, kembalikan null
// LANGKAH 4 — TERJEMAHKAN
function cariBerdasarkanId(daftar, id) {
  for (const item of daftar) {
    // menggunakan === agar tipe datanya terjamin sebagai number
    if (item.id === id) {
        // menggunakan return agar perulangan berhenti saat id ditemukan sehingga tidak perlu memeriksa item lain
        // menyerahkan hasilnya ke pemanggil
        return item; 
    }
  }
  // jika tidak ada hasil, maka kembalikan null dengan sengaja sebagai jawaban "tidak ada"
  return null;
}

console.log("F2 normal :", cariBerdasarkanId(daftarItem, 1)); // harus menampilkan object Rendang
console.log("F2 tidak ada:", cariBerdasarkanId(daftarItem, 99)); // harus menampilkan null

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────

// LANGKAH 1 — PAHAMI
// Masukan: daftar item (array of objects) dan sebuah teks kategori (string)
// Keluaran: array baru berisi daftar item yang kategorinya sesuai
// LANGKAH 2 — CONTOH
// Normal: kategori "Minuman" ada 3 item maka kembalikan array berisi 3 item tersebut
// Kasus tepi: kategori "Elektronik" maka kembalikan array kosong []
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. siapkan array kosong penampung hasil
// 2. untuk tiap item di daftar:
// 3. kalau kategori item sama dengan kategori yang dicari, tambahkan item ke array hasil
// 4. kembalikan array hasil
// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftar, kategori) {
  const hasil = [];
  // hasil berupa array karena bisa ada banyak item yang cocok,
  // dan [] dikembalikan kalau tidak ada yang cocok supaya pemanggil tetap bisa memperlakukannya sebagai daftar
  for (const item of daftar) {
    if (item.kategori === kategori) {
      hasil.push(item); 
    }
  }
  return hasil;
}

console.log("F3 normal :", saringKategori(daftarItem, "Minuman")); // harus menampilkan 3 item Minuman
console.log("F3 tidak ada:", saringKategori(daftarItem, "Elektronik")); // harus menampilkan []

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────

// LANGKAH 1 — PAHAMI
// Masukan: daftar item (array of objects)
// Keluaran: angka rata-rata properti numerik khusus untuk item yang tersedia (number)
// LANGKAH 2 — CONTOH
// Normal: 7 item tersedia dengan total 145000 / 7 = 20714.29
// Kasus tepi: tidak ada satupun item yang bernilai true maka kembalikan null
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. siapkan wadah total angka (mulai dari 0) dan jumlah item tersedia (mulai dari 0)
// 2. untuk tiap item di daftar:
// 3. kalau item nilainya true, tambahkan angkanya ke wadah total, dan tambah jumlah item 1
// 4. kalau ternyata jumlah item tersedia adalah 0, kembalikan null
// 5. kalau ada, bagi total angka dengan jumlah item untuk dapat rata-rata, lalu kembalikan
// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftar) {
  let totalHarga = 0;
  let jumlahTersedia = 0;

  for (const item of daftar) {
    if (item.tersedia === true) {
      totalHarga = totalHarga + item.harga; 
      jumlahTersedia = jumlahTersedia + 1;
    }
  }

  // jika tidak ada item yang tersedia, pembagian 0 / 0 akan menghasilkan NaN
  // jadi dikembalikan null untuk menandakan "tidak ada yang bisa dirata-rata"
  if (jumlahTersedia === 0) {
    return null;
  }

return totalHarga / jumlahTersedia;
}   

console.log("F4 normal :", rataRataTersedia(daftarItem));
console.log("F4 tidak ada:", rataRataTersedia([daftarItem[6], daftarItem[7]])); // jika tidak ada satu pun item yang bernilai true maka hasil harus null