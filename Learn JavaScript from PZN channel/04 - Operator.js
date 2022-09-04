// arimatika
// + - * ** / %
console.log(1 + 2);
console.log(2 ** 2);

// assignments
// += -= *= **= /= %=
let result = 3
console.log(result **= 3);
console.log(result += 3);

// unary
// + , menandakan nilai positif
// - , menandakan nilai negatif
// ++ --
let test = 1
console.log(+10);
console.log(-10);
console.log(++test);
console.log(test++);

// perbandingan
// == != > < >= <= !== ===
// kalo == ngecek kondisi saja
// kalo === ngecek kondisi dan tipe data
console.log(10 == 10);
console.log(10 === "10");

// logika
// && || !
console.log(10 == 10 && 10 != 5);

// operator logika tidak hanya bisa diterapkan pada nilai boolean tpi jg bisa utk non boolean
// kalo || membaca dari kiri kekanan dan akan mengambil nilai truthy jika kondisinya hanya satu
// yg nilainya truthy
// tpi kalo dua" nya truthy maka akan diambil elemen pertama dari kiri
// kalo dua"nya falsy maka akan diambil elemen terakhir dari kanan
console.log("hello" || 0 || "abdu");
// kalo && kebalikan dari ||
console.log(0 && -0);

// ternary, adalah bentuk sederhana dari if else statement
let nilai = 70
console.log((nilai >= 75) ? 'lulus' : 'tidak lulus')

// nullish value (??), adalah bentuk yang value nya null dan undefined
// kalo bernilai null atau undefined maka akan di set nilai default nya
let data
console.log((data ?? 'abdu'))

// optional chaining (?), untuk memastikan apakah objek atau property itu bernilai
// nullish atau tidak
let objNama = {}
// ini memastikan jika object objNama itu tidak nullish dan akses property selanjutnya
console.log(objNama?.nama?.umur);