// Konsep this pada Arrow Function


// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Abdu'
//     this.umur = 20
//     this.sayHello = function () {
//         console.log(`Hello, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     }
// }

// const Abdu = new Mahasiswa();



// -----------------------------------------------------------------------------------------------



// Ubah Const tadi menjadi arrow function
const Bahasiswa = function () {
    this.nama = 'Abdu'
    this.umur = 20
    this.sayHello = () => { // Arrow Function ini aslinya TIDAK memiliki konsep "this" didalamnya
        console.log(`Hello, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
        console.log(this);
    }
}

const abdu2 = new Bahasiswa();



// -----------------------------------------------------------------------------------------------



// Supaya lebih jelas, gunakan Object literal sebagai contoh nya :
const mhs = {
    nama: 'Abdu',
    umur: 20,
    sayHello: () => {
        console.log(this); // jadi ini akan menghasilkan object global (Window) karena Arrow Function ini akan melihat ke lexical
        // scope nya, jika tidak ada "this" maka dia akan lihat ke global object yaitu WINDOW
    }
}
console.log(mhs);


// ---------------------------------------------------------------------------------------------

// Contoh lainnya
const Mahasiswa = function () {
    this.nama = 'Abdu'
    this.umur = 20
    this.sayHello = function () { // Ini adalah FUNCTION EXPRESSION dan memiliki konsep THIS didalamnya
        console.log(`Hello, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);

        console.log(this); // FUNCTION EXPRESSION MENGANUT KONSEP THIS DIDALAMNYA
    }



    // Jika kita menggunakan "this" didalam FUNCTION DECLARATION, maka funct trsbt akan melakukan HOISTING
    // jika tidak memiliki this didalam FUNCTION DECLARATION trsbt, maka funct trsbt akan melihat ke global object nya yaitu window

    // setInterval(function () {
    //     console.log(this);
    // }, 500)


    // Untuk itu gunakan Arrow Function
    // setInterval(() => { // Jika menggunakan ARROW FUNCTION, maka this nya akan mencari ke LEXICAL SCOPE
    //     console.log(this);
    // }, 500)



    // jika undefined kita berikan nilai ++ maka hasilnya akan menjadi NaN
}
const abdu = new Mahasiswa();








// ---------------------------------------------------------------------------------------------------
// Contoh nyata penggunaan this pada Arrow Function

const box = document.querySelector('.box')
box.addEventListener('click', function () {

    // Ini untuk membetulkan ANIMASI NYA
    let satu = 'size'
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu] // jadi ini kita mengembalikan posisi dari CLASS nya ketika di toggle
    }

    this.classList.toggle(satu);


    setTimeout(() => { // ini memakai Arrow Function karena KONSEP FUNCTION DECLARATION tidak menganut LEXICAL SCOPE
        this.classList.toggle(dua) // Jika menggunakan Arrow function, maka this yg ada didalamnya akan MENGARAH KE BOX nya
    }, 600)
})



function contoh() {
    this.makan = function () {
        return this;
    }
}
let eunha = new contoh();


// let angka = prompt('Masukan Angka...')
// switch (angka) {
//     case '1':
//         alert('Jawaban anda benar!')
//         break;
//     default:
//         alert('ulangi lagi')
//         break;
// }

// let a = 0;
// while (a <= 5) {
//     console.log(`Hello, selamat datang ${a}x`);
//     a++;
// }

// let b = 0;
// do {
//     console.log(`Hello, selamat datang ${b}x`);
//     b++;
// } while (b < 5)

// for (let c = 0; c < 5; c++) {
//     console.log(`Hello, apa kabar? ${c}x`);

// }

const contoh2 = {
    nama: 'eunha',
    umur: 20,
    cara: function () {
        console.log(this);
    }
}
console.log(contoh2);


const test = function (){
    this.nama = 'abdu'
    console.log(this);
}