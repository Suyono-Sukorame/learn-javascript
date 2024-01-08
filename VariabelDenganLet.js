// Deklarasi variabel dengan let
let nama = "John Doe";
let umur = 30;

console.log("Nama:", nama); // Output: John Doe
console.log("Umur:", umur); // Output: 30

// Mengubah nilai variabel
nama = "Jane Doe";
umur = 35;

console.log("Nama setelah diubah:", nama); // Output: Jane Doe
console.log("Umur setelah diubah:", umur); // Output: 35

// Scope variabel let
function contohScope() {
  let pesan = "Variabel dalam function";

  console.log(pesan); // Output: Variabel dalam function
}

// console.log(pesan); // Error: pesan is not defined (karena pesan berada di dalam function)

contohScope(); // Memanggil function untuk menampilkan pesan di dalamnya
