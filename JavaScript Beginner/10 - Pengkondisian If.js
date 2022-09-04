// Sintaks dasar penggunaan if
// if (kondisi) {
//   aksi 1
// } else {
//   aksi 2
// }

// Else if digunakan ketika kita punya sebuah kondisi lain

let main = true;
while (main) {
    var angka = parseInt(prompt('Masukan Angka :'));
    if (angka % 2 == 0) {
        alert(angka + ' adalah bilangan GENAP !');
    } else if (angka % 2 == 1) {
        alert(angka + ' adalah bilangan GANJIL !');
    } else {
        alert('Anda tidak memasukkan Angka');
    }

    main = confirm('coba lagi?');
}
alert('Terima kasih sudah bermain! Yeayyy');

// cth kedua
var jmlAngkot = 10;
var AngkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot != 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}