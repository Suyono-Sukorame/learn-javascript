// Mendeklarasikan variabel dengan tipe data string
let nama = "John Doe";
let alamat = "Jalan Pahlawan No. 123";
let pesan = `Halo, ${nama}! Selamat datang`;

// Menampilkan nilai variabel string
console.log(nama); // Output: John Doe
console.log(alamat); // Output: Jalan Pahlawan No. 123
console.log(pesan); // Output: Halo, John Doe! Selamat datang

// Menggabungkan (concatenate) string
let kataPertama = "Halo, ";
let kataKedua = "Selamat pagi!";
let kalimatGabungan = kataPertama + kataKedua;
console.log(kalimatGabungan); // Output: Halo, Selamat pagi!

// Mengakses karakter individual dalam string
let kata = "JavaScript";
console.log(kata[0]); // Output: J
console.log(kata[2]); // Output: v

// Mendapatkan panjang string
let namaPanjang = "Christopher";
console.log(namaPanjang.length); // Output: 11 (jumlah karakter dalam string)

// Menggunakan metode pada string
let kalimat = "Hari ini adalah hari yang cerah";
console.log(kalimat.toUpperCase()); // Output: HARI INI ADALAH HARI YANG CERAH
console.log(kalimat.indexOf("hari")); // Output: 0 (posisi pertama kata "hari" dalam string)
console.log(kalimat.slice(0, 7)); // Output: Hari ini (mengambil substring dari indeks 0 hingga 6)
