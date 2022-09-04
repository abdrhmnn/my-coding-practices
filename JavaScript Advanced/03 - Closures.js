// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) didalam function trsbt

// Lexical scope adalah sebuah inner function yang bisa mengakses ke PARENT FUNCTION nya atau membutuhkan
// data kepada PARENT FUNCTION nya
// contoh :

function init() {
    let nama = 'abdu'

    function tampilNama() {
        console.log(nama);
    }
    tampilNama(); // console.dir utk mencetak isi OBJECT dari sebuah element
}
init();



// ---------------------------------------------------------------------------------------------------------



// Contoh lain penggunaan Closures
function init2() {

    function tampilNama2(nama) {
        console.log(nama);
    }
    return tampilNama2; // ini artinya function tampilNama blm dijalankan utk menjalankannya simpan init kedlm variable
}
let panggilNama = init2();
panggilNama('abdu');




// ---------------------------------------------------------------------------------------------------------



// Contoh lain penggunaan Closures
function init3() {
    let nama = 'rahman'

    function tampilNama3() { // bisa juga gunakan parameter didalam inner function nya
        console.log(nama);
    }
    return tampilNama3;
}
let panggilNama2 = init3();
panggilNama2('Eunha');



let init4 = (function init5() {
    let umur = 20;
    return function (nama) { // dan juga bisa juga gunakan ANONYMOUS FUNCTION jadi tampilNama itu dihapus dan 
        // digantikan dengan return

        console.log(`Halo selamat datang ${nama}, umur saya ${umur}.`);
    }
})();
init4('Abdu');


function init5(umur) {
    // let umur = 20;
    function tampilNama4(nama) {
        console.log(`Halo selamat datang ${nama}, umur saya ${umur}.`);
    }
    return tampilNama4;
};
let panggilNama3 = init5(30); // ini contoh mengirim argumen di PARENT FUNCTION nya atau cth FUNCTION FACTORIES
panggilNama3('Abdu');



// -----------------------------------------------------------------------------------------------------



// Alasan penggunaan Closure :
// 1. untuk membuat function factories
// 2. untuk membuat private method


// 1. Membuat function factories
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('Abdu');
selamatSiang('Eunha');
// Function factories itu adalah membuat function SESUAI dengan function yang lain



// 2. private method
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})(); // ini adlh cara supaya function add tdk perlu dimasukkan kedlm variable, cukup dibungkus dgn () dan 
// tambahkan () diluar function nya, namanya Immedietly Invoke Function


// maksud dari private method trsbt ialah variable counter itu kita tidak bisa ubah nilainya karena dia sudah
// dimasukkan kedalam closure


console.log(add());
console.log(add());
console.log(add());
console.log(add());





// Latihan
function ucapkanSalam2(waktu2) {
    function salam1(nama2) {
        function salam2(keberadaan) {
            console.log(`Halo ${nama2} yang ada di ${keberadaan}, selamat ${waktu2}, semoga harimu menyenangkan!`);
        }
        return salam2;
    }
    return salam1;
}
let func1 = ucapkanSalam2('Malam');
let func2 = func1('Abdu');
func2('Rumah')

// higher order function
function halo(){
    console.log('hello world');
}

const coba = (function(halo){
    let nama = 'abdu'
    halo()
    return function(umur){
        console.log('hello ' + nama + ', saya umur ' + umur);
    }
})(halo)

coba(20)


let nama = 'abdu'
let halo2 = (function (){
    return function (){
        let umur = 20
        return function (){
            return console.log(`Halo ${nama}, umur saya ${umur} tahun`);;
        }
    }
})()();

umur = 30
// console.dir(halo2);
halo2()