// Template String adalah string literal yang memungkinkan adanya sebuah expression didalamnya

// String literal adalah string yg biasa kita buat, baik itu disimpan didalam variable atau dicetak didlm console log

// contoh string literal
// let nama = 'abdu'
// let nim = "31293292"

// ini membuat string literal dgn back tick
// let email = `abdu@gmail.com`


// dgn membuat string literal back tick memungkinkan kita membuat TEMPLATE LITERAL

// DENGAN MENGGUNAKAN back tick ini kita jadi bisa melakukan banyak hal, yaitu :
// 1. Multi-line string
// 2. Embedded Expression
// 3. HTML Fragments
// 4. Expression Interpolation
// 5. Tagged Template

// ---------------------------------------------------------------------------------

// Contoh Multi-line string
console.log(`Halo abdu,
apa kabar?`); // Ini membuat multi-line string yaitu membuat string di BARIS BARU


// ------------------------------------------------------------------------------------


// multi-line string, bisa juga digunakan utk HTML FRAGMENTS, contoh :
const mhs = {
    nama: 'abdu',
    umur: 20,
    nim: 32091209
};

let HTMLFragments = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;


document.body.innerHTML = HTMLFragments;

console.log(HTMLFragments);



// ------------------------------------------------------------------------------


// Contoh Embedded Expression
const nama = 'Abdu'
let umur = 20
console.log(`Halo nama saya adalah ${nama}, umur saya ${umur} tahun.`);


// --------------------------------------------------------------------------------


// Bisa juga digunakan utk Expression Interpolation
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);


// Didalam Expression tidak hanya operasi aritmatika saja yang bisa dilakukan, tetapi BISA jg memanggil FUNCTION atau bahkan
// operasi TERNARY, contoh :
// console.log(`${alert('Hello World!')}`);

// contoh lain dari Expresi
const x = 10;
console.log(`${(x % 2 == 0)? 'BENAR!' : 'SALAH!'}`);


const arr = [1, 3, 5, 6, 2, 10, 3, 5, 8]
let hasil = `<h3>Hasil : ${arr.filter(element => element > 5)}</h3>
<ul>
    <li>${arr[0]}</li>
    <li>${arr[1]}</li>
    <li>${arr[2]}</li>
    <li>${arr[3]}</li>
    <li>${arr[4]}</li>
</ul>`

document.body.innerHTML = hasil