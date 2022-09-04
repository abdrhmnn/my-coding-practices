// Arrow function adalah bentuk lain yang lebih ringkas dari Function Expression


// Contoh pembuatan Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`
// }

// console.log(tampilNama('abdu'));



// Contoh pembuatan Arrow Function dengan SATU PARAMETER
const tampilNama = nama => {
    return `Halo, ${nama}`
}
console.log(tampilNama('abdu'));



// ------------------------------------------------------------------------------------



// Contoh pembuatan Arrow Function dengan LEBIH DARI SATU PARAMETER
const tampilNama2 = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`
}

console.log(tampilNama2('abdu', 'malam'));

// --------------------------------------------------------------------------------------



// Jika hasil dari function cuma return aja maka gunakan "Implisit return"
const tampilNama3 = nama => `Halo, ${nama}`
console.log(tampilNama3('eunha'));

// --------------------------------------------------------------------------------------



// Jika TIDAK terdapat PARAMETER didalam functionnya maka WAJIB tuliskan tanda ()
const tampilNama4 = () => `Hello World!`
console.log(tampilNama4());


// --------------------------------------------------------------------------------------

// Contoh lain penggunaan Arrow Function 
let mahasiswa = ['abdu', 'rahman', 'eunha']
let jumlahHuruf = mahasiswa.map(nama => nama.length) // Ini mengembalikan nilai Array
console.log(jumlahHuruf);


// mahasiswa.map((nama) => nama.length)
// console.log(mahasiswa);



// Ini mengembalikan Nilai Object
let jumlahHuruf2 = mahasiswa.map(nama => ({
    nama,
    // nama,
    // didalam JS yg baru, jika kita ingin mengembalikan OBJECT dan jika nama PROPERTI nya itu SAMA
    // dengan NILAI nya, maka cukup tuliskan SATU SAJA GAPERLU DUA"NYA


    jmlHuruf: nama.length
}))
console.table(jumlahHuruf2);