// Method itu adalah function yang ada didalam sebuah objek

// Array Method
// 1. .length = untuk mengetahui jumlah elemen dari array
// 2. .join = yang menggabungkan seluruh isi aray dan mengubahnya menrjadi STRING 
// 3. .push, .pop, .unshift, .shift = digunakan untuk menambah atau menghapus elemen array

// 1. join()
var arr = ["Abdu", "Rahman", "Umji"];
console.log(typeof(arr.join(' ')));
// jika tanda koma nya ingin diganti maka tambahkan parameter yang ada didalam method join nya.
// disini saya coba tambahkan parameter SPASI maka tanda koma tadi akan berganti dgn SPASI


// 2. push & pop
// .push digunakan untuk menambah elemen array diakhir dari ELEMEN array nya
arr.push('Eunha', 'Sowon');

// .pop digunakan untuk menghilangkan elemen terakhir dari array
arr.pop(); // harus satu - persatu menghapus nya


// 3. unshift & shift
// .unshift digunakan untuk menambahkan elemen baru diawal array
arr.unshift('Eunha');

// .shift digunakan untuk menghilangkan elemen pertama dari array
arr.shift();
console.log(arr.join(' - '));



// Loop method array
// 1. forEach
// forEach TIDAK mengembalikan NILAI ARRAY
var angka = [1, 2, 3, 4, 5, 6, 7, 8, "Hello", true];
var mhs = ["Abdu", "Rahman", "Umji", "Eunha"];
// for ( var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// Ini jika kita gunakan for, tetapi jika kita gunakan forEach maka :

angka.forEach(function (e) {
    console.log(typeof(e));
});

mhs.forEach(function (e, i) { // parameter e itu adalah elemen dari ARRAY nya dan parameter i itu adalah elemen dari INDEKS nya
    console.log('Mahasiswa ke-' + (i + 1) + ': ' + e);
});


// 2. map
// map mengembalikan ARRAY
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var number2 = number.map(function (e) { // jadi kita harus simpan dulu kedalam variable karena map 
    // mengembalikan NILAI ARRAY
    return e * 2;
}).
filter(nama => nama < 10)
console.log(number2.join(' - '));

const newNumber = number.map((e) => e * 2).filter((e, i) => e >= 10).sort((a, b) => a - b)
console.log(newNumber.join(' - '));


// 3. sort
// untuk mengurutkan isi dari array
var num = [1, 4, 3, 5, 2, 8, 9, 7, 6, 10, 20];
console.log(num.join(' - '));
num.sort(function (a, b) { // Ini adalah rumus supaya angka PULUHAN didalam array nya menjadi terurut secara BENAR
    return a - b;
});
console.log(num.join(' - '));


//  Finding array methods
// 1. filter
// fungsinya mencari nilai pada array dan MENGEMBALIKAN nya kedalam bentuk ARRAY dan mengembalikan
// LEBIH dari SATU NILAI
var num = [1, 4, 3, 5, 2, 8, 9, 7, 6, 10, 20];
var num2 = num.filter(function (e, i) {
    return e > 4; // jadi ini kita akan mencari angka yang lebih dari 4 didalam ARRAY
});
console.log(num2.join(' - '));

var num = [1, 4, 3, 5, 2, 8, 9, 7, 6, 10, 20].filter((e, i) => e > 4)
console.log(num.join(' - '));


// 2. find
// fungsinya mencari SATU NILAI pada ARRAY tetapi juga HARUS disimpan KEDALAM SEBUAH VARIABLE
var angka = [1, 4, 3, 5, 2, 8, 9, 7, 6, 10, 20];
var angka2 = angka.find(function (e) {
    return e > 4;
});
console.log(typeof(angka2));


// splice and slice method
// 1. Splice
// contekan dari splice :
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
var arr = ["Abdu", "Rahman", "Umji"];
arr.splice(2, 0,
    'Eunha'); // ini artinya kita akan menseleksi elemen di indeks ke 2 dan tidak ada elemen yang ingin kita
// hapus dan kita tambahkan string 'eunha' pada indeks ke 2
console.log(arr.join(' - '));


var arr2 = ["Abdu", "Rahman", "Umji", true];
arr2.splice(1, 2,
'Eunha'); // ini artinya saya akan mulai dari indeks ke 1 dan menghapus 2 indeks setelahnya termasuk indeks 
// yang dipilih sebelumnya dan saya tambahkan string baru yaitu 'eunha'
console.log(arr2.join(' - '));


// 2. Slice
// adalah mengiris sebuah array menjadi sebuah array yang baru
// rumus nya : slice(indeksAwal, indeksAkhir);
var arr = ["Abdu", "Rahman", "Umji", true, "Eunha"];
var arr2 = arr.slice(1, 4); // slice ini akan menghasilkan ARRAY BARU dan harus ditampung kedalam variable
console.log(typeof(arr2));


var arr3 = ['Hello', 'Rahman', 'Hai'];
arr3.splice(1, 2, 'Eunha');
console.log(typeof(arr3));

var arr4 = ["Abdu", "Rahman", "Umji", true];
arr4.splice(1, 2, 'Eunha', false);
console.log(arr4.join(' - '));

var arr4 = ["Abdu", "Rahman", "Umji", true];
arr4.splice(1, 0, 'Eunha', false);
console.log(arr4.join(' - '));

console.log(Math.round(Math.random() * 10) + 1);
console.log(Math.random() * 10)

const input = prompt('halo ?')
alert(input.toUpperCase())