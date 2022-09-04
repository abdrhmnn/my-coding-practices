const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]


// 1. filter

// contoh mencari angka >= 3 dengan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka);



// contoh mencari angka >= 3 dengan filter
const angkaBaru = angka.filter(function (nama) {
    return nama >= 3;
})
console.log(angkaBaru);

// meringkas kode diatas dgn arrow function
// const newAngka = angka.filter(a => a >= 3)


// ----------------------------------------------------------------------------------------



// 2. map
// utk memetakan tiap" element yg ada didalam array nya menggunakan fungsi yang baru
// misalnya saya akan kalikan semua element array dengan 2

// ini contoh kode panjangnya
const newAngka1 = angka.map(a => a * 2).
filter(nama => nama > 2)
console.log(newAngka1); // Ini TIDAK MENGUBAH ISI DARI ARRAY angka nya



// const newAngka = angka.map(a => a * 2);
// console.log(angka); // dan TIDAK MENGUBAH ISI dari ARRAY nya
// console.log(newAngka);



// ---------------------------------------------------------------------------------------



// 3. reduce
// utk melakukan sesuatu terhadap SELURUH ELEMENT pada ARRAY nya
// misalnya saya ingin menjumlahkan SELURUH ELEMENT pada ARRAY nya
const newAngka2 = angka.reduce((accumulator, currentValue) => accumulator + currentValue)

// parameter nya ada dua yaitu accumulator dan currentValue
// dan sebenarnya ada satu parameter lagi yaitu NilaiAWAL
// secara default nilaiAwal nya adalah 0, jadi
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// dan nilai awal ini bisa diubah sesuai dengan keinginan kita


// accumulator itu adalah hasil dari proses nya
// currentValue itu adalah element ARRAY yang sedang di LOOPING nya
// misalnya -1 + 8 = 7
// 8 adalah currentValue
// 7 adalah accumulator

console.log(newAngka2);



// -------------------------------------------------------------------------------------------------


// Method Chanining
// kita bisa menggabungkan fungsi pada Higher Order Function ini dalam SATU kali eksekusi, jadi gaperlu disimpan
// kedalam variable dulu

// misalnya saya ingin cari angka yg > 5 setelah itu hasilnya saya akan kalikan 3 lalu baru saya jumlahkan semuanya
const hasil = angka.filter(a => a > 5) // hasilnya 8,9,9
    .map(a => a * 3) // hasilnya 24,27,27
    .map(a => a / 2)
    .reduce((accu, current) => accu + current);

console.log(hasil);

// gunakan simbol titik (.) utk menggabungkan semuanya