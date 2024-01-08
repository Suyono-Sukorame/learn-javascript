// Operasi yang menghasilkan NaN
let hasilOperasi1 = 0 / 0; // Pembagian oleh nol
let hasilOperasi2 = Math.sqrt(-1); // Akar kuadrat dari bilangan negatif

console.log("Hasil operasi 1:", hasilOperasi1); // Output: NaN
console.log("Hasil operasi 2:", hasilOperasi2); // Output: NaN

// Membandingkan nilai NaN dengan metode isNaN()
console.log("Apakah hasilOperasi1 NaN?", isNaN(hasilOperasi1)); // Output: true
console.log("Apakah hasilOperasi2 NaN?", isNaN(hasilOperasi2)); // Output: true

// Membandingkan nilai NaN dengan itself (perhatikan, hasilnya selalu false)
console.log("Apakah NaN sama dengan NaN?", hasilOperasi1 === hasilOperasi1); // Output: false
console.log("Apakah NaN sama dengan NaN?", isNaN(hasilOperasi1)); // Output: true
