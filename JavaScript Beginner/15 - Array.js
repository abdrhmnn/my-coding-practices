// Array adalah tipe data yang digunakan utk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap" elemennya memiliki INDEKS
// Contoh :
// let hari = ['senin', 'selasa', 'rabu'];

// Beberapa definisi array :
// 1. Array pada JS bertipe object
// 2. Elemen pada array boleh memiliki tipe data yang berbeda
// 3. Key adalah index pada array yang bertipe interger dan dimulai dari angka 0 (nol)

let myArr = ['teks', 2, false, [4, 5, [1, 2, 3, 6]], 10.2, true];

console.log(myArr[3][2][3]); // Ini cara mencari nilai array multidimensi 

// menambah isi array
// let arr = [];
// arr[0] = "Abdu";
// arr[1] = "Rahman";

// menghapus isi array
// myArr[1] = undefined; // Hapus sesuai dengan INDEKS dari array
// console.log(arr);

// menampilkan isi array
for (var i = 0; i < myArr.length; i++) { // arr.length adalah method utk menyuruh JS menghitung sendiri elemen dari array nya
    console.log('Mahasiswa ke-' + (i + 1) + ' : ' + myArr[i]);
}

myArr.forEach(function (e, i) {
    console.log('Indeks ke ' + (i + 1) + ', dan isinya' + ' : ' + e.toUpperCase());
})

myArr.map((e, i) => console.log('Indeks ke ' + (i + 1) + ', dan isinya' + ' : ' + e.toUpperCase()))
