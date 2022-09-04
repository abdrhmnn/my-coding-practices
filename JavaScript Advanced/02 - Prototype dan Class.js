// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (energi) {
//         this.energy -= energi;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function (jam) {
//         this.energy += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energy) {
//     let mhs = Object.create(methodMahasiswa);
//     mhs.nama = nama;
//     mhs.energy = energy;


//     return mhs;
// }

// const mhs = Mahasiswa('Abdu', 10);



// UBAH Function Declaration menjadi Const Funct

// function Mahasiswa(nama, energy) {
//     // let this = Object.create(Mahasiswa.prototype);

//     // Dibelakang layar artinya JS itu membuat sebuah object kosong didalam variable this dan juga memanggil
//     // Object.create(Mahasiswa.prototype)
//     // Nah prototype yg dibuat secara DEFAULT inilah yang akan dimanfaatkan caranya lihat dibawah :

//     this.nama = nama;
//     this.energy = energy;


//     // return this;
// }


// Ini adalah versi OBJECT dgn menggunakan PROTOTYPEPLE INHERITANCE
// Jadi kita tidak perlu membuat OBJECT BARU LAGI

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energy += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
// }


// let abdu = new Mahasiswa('Abdu', 10);



// ini adalah versi CLASS nya
class Mahasiswa2 {
    constructor(nama, energi) { // constructor ini fungsinya utk membuat PROPERTI dan bs diberikan PARAMETER
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    main(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
}

let abdu2 = new Mahasiswa2('abdu', 10)



// --------------------------------------------------------------------------------------------------


let angka = []; // misal saya punya array kosong

// maka dibelakang layar akan membuat seperti ini
// let angka = new Array(); // keyword dari "new" itu menandakan dia adalah Const Function

// sehingga jika dia const function, maka Array itu adalah sebuah OBJECT yang didalamnya sudah membawa PROTOTYPE
// dan sebenarnya didalam Javascript itu terdapat Const Function Array yang isinya adalah sebuah PROTOTYPE
// function Array() {
//     let this = Object.create(Array.prototype);
// }


// Semua TIPE DATA DIDALAM JS itu adalah OBJECT
// nah kalo dia bersifat OBJECT maka didalamnya terdapat proto (Prototype)
// misal Number.prototype , Array.prototype

// let satu = 'satu';
// let satu = new String;
// function String(){
//     let this = Object.create(String.prototype)
// }

function Coba(param1, param2){
    // let test = Object.create(Coba.prototype)
    this.nama = param1
    this.makan = function(){
        console.log('hello, ' + this.nama);
    }
}

const halo = new Coba('abdu', 12).makan()
console.log(halo);
const halo2 = new Array()

// const tryAbdu = {
//     nama: 'abdu'
// }
// console.log("nama" in tryAbdu);