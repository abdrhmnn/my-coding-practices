// Didalam JS itu tidak ada namanya Interger (Bilangan Bulat)
// Ukuran angka yang bisa ditampung oleh JS adalah 64-bit

// Ada beberapa jenis angka yang dapat disimpan dengan JS :
// 1. Angka tanpa desimal = 10, 1500, 123456, hanya boleh sampai 15 DIGIT
// 2. Angka dengan desimal = 3.14, 0.5, 0.100, maksimal 17 DIGIT dibelakang KOMA
// 3. Eksponen = 123e5, 123e-5
// 4. Bilangan Negatif

// Terdapat juga angka spesial didalam JavaScript
// 1. Infinity = 2/0
// 2. -Infinity = -2/0
// 3. NaN (Not a Number) = 100/"apel"

// HATI" ketika membagikan sebuah number dengan string maka JS akan melakukan perintahnya tanpa 
// memperdulikan tipe datanya, contoh :
// 100 / "10" = 10 atau
// "10" / "10" = 1

console.log(2/0);