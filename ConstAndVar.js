const pi = 3.14;
console.log(pi); // Output: 3.14

// pi = 3.14159; // Error: Assignment to constant variable. (Nilai variabel const tidak dapat diubah)

var x = 10;
console.log(x); // Output: 10

if (true) {
  var y = 20;
  console.log(y); // Output: 20
}

console.log(y); // Output: 20 (variabel y dapat diakses di luar blok if)
