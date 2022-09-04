// parseInt = dari string ke number (bilangan bulat)
// parseFloat = dari string ke number (bilangan pecahan)
// Number = dari string ke number (bulat dan pecahan)
// number.toString = dari number ke string

let angka = "1"
let angka2 = 1
console.log(`${parseInt(angka) + "1"}`);
console.log(`${angka.toString() + 1}`);
console.log(`${parseInt("NaN")}`);

// jika data string yg dikonversi ke number bukan data yg valid
// maka akan menghasilkan NaN, maksudnya itu bukanlah number
// jika ada operasi pada NaN maka akan menghasilkan NaN lagi
// untuk mengecek apakah nilai atau variabel itu NaN bisa gunakan isNaN()