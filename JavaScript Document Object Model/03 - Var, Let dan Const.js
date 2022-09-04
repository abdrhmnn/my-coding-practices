// 1. var
// var i = 10;
// console.log(i);
// dengan menggunakan var, maka kode nya akan dijalankan secara Hoisting



// 2. let
for (let i = 0; i < 10; i++) {
    console.log(i); //  dengan menggunakan let maka kita akan menganut cara BLOCK SCOPE bkn Function
    // Scope
}
// dan SELALU GUNAKAN let untuk setiap PENGULANGAN !



// 3. const
// berfungsi untuk meminimalisir perubahan state
// dan juga sebuah VARIABLE yang sudah dideklarasikan dengan const maka nilai nya TIDAK BISA diubah
// const a = 10;
// a = 15; // Maka ini akan error
// console.log(a);


// untuk mengubah nilai dari const, caranya :
// gunakan sebuah object, seperti 
const b = {
    nama: 'Abdu',
    umur: 20
}
b.nama = 'Hello World';
console.log(b.nama);
// maka ini akan Merubah Property Nama menjadi "Hello World"


// atau menggunakan sebuah method .push, seperti
const c = [1, 2, 3, 4];
c.push(5); // maka nilai 5 akan masuk kedalam array
console.log(c.join(' - '));


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (makanan) {
//     this.energi += makanan;
//     }
// }
// const mhs = new Mahasiswa('Abdu', 0);
// console.log(mhs);