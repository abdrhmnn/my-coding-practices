// Function terdapat dua yaitu :
// 1. Build-in function adalah fungsi yang sudah dibuat oleh JS
// 2. User defined function adalah fungsi yang kita buat SENDIRI

// Terdapat 2 cara untuk membuat function :
// 1. Function declaration = caranya sama seperti membuat function pada umumnya 
// 2. Function Expression = adalah function yang DISIMPAN kedalam VARIABLE

// JavaScript SELALU menghitung sebuah indeks (string) itu dimulai dari NOL (0)

// cara buat function :
// Function Declaration adalah function yang sudah kita buat sebelumnya, jadi
// function namaFunction (parameter(optional)) { functionBody }

function jumlahVolumeDuaKubus(a, b) {
    var total, volumeA, volumeB
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;
    return total;
}

// Function Expression adalah function yang kita simpan kedalam sebuah Expresi (Variable), jadi
// var tampilPesan = function (nama){
//    alert('hello' + nama);
// } 
// tampilPesan('Abdu');

// Function Expression biasanya disimpan kedalam sebuah VARIABLE
// Ketika ingin membuat function expression SELALU didefinisikan terlebih dahulu sebelum digunakan

let i = true;
while (i) {
    var tampilPesan = function () {
    let nama = prompt('Masukan nama :')
    alert('hello ' + nama);
    return nama;
    }
    console.log(typeof(tampilPesan()));
    i = confirm('mau lagi ?')
}
alert('ty')

// Perbedaan parameter dan argumen
// Parameter adalah suatu variable lokal yang ada didalam kurung pada saat function dibuat dan juga digunakan untuk menampung nilai ketika function dipanggil

// Argumen adalah nilai yang dikirimkan kepada parameter saat fungsi nya dipanggil
// contoh :
function tambah(a, b) { // a dan b yang ada didlm function tambah itu adalah PARAMETER
    return a + b;
}
console.log(tambah(10, 20)); // 10 dan 20 yang ada didalam itu adalah ARGUMEN