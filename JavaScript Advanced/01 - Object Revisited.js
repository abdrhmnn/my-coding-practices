// Cara untuk membuat object pada Javascript


// 1. Object Literal
// PROBLEM : Tidak efektif untuk objek yang banyak 

// let mhs = {
//     nama: 'Abdu',
//     energy: 10,

//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }


// ----------------------------------------------------------------------------------------------


// 2. Function Declaration
// PROBLEM : Mengelola 2 OBJEK sekaligus, alasannya liat dibawah :

// Ketika object ini dijalankan, maka method yang ada didalamnya juga ikut dijalankan
// walalupun kita tidak panggil didalam ARGUMEN nya
// Untuk itu cara nya buat OBJECT LITERAL baru yang isinya method trsebut


const methodMahasiswa = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function (energi) {
        this.energy -= energi;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },
    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
}

function Mahasiswa(nama, energy) {
    // let mhs = {}
    let mhs = Object.create(methodMahasiswa); // ini berfungsi untuk memberi TAHU OBJECT mana yang saling berhubungan
    mhs.nama = nama;
    mhs.energy = energy;
    // mhs.makan = methodMahasiswa.makan; // Dan tambahkan kedalam object MAHASISWA nya
    // mhs.main = methodMahasiswa.main;

    return mhs;
}

const mhs = Mahasiswa('Abdu', 10);


// Ini masih tidak fleksibel karena KEDUA JENIS OBJECT TERSEBUT HARUS saling BERHUBUNGAN, misal telah terjadi 
// hapus data didalam OBJECT LITERAL nya maka method yang dipanggil didalam OBJECT MAHASISWA juga harus dihapus
// Untuk menanggulangi masalah tersebut, gunakan Object.create() supaya jadi fleksibel
// Caranya cukup ganti isi dari VARIABLE mhs menjadi object.create dan isinya parameter OBJECT PARENT nya




// ----------------------------------------------------------------------------------------------------



// 3. Constructor Function
// jika membuat objek dengan cara ini tidak perlu menggunakan return
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
        return this;
    }

    this.main = function (energi) {
        this.energy -= energi;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

const mhs2 = new Mahasiswa('Abdu', 20);
console.log(mhs2);