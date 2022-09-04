// EXECUTION CONTEXT, HOISTING & SCOPE


// console.log(nama);
// var nama = 'Abdu' // ini menghasilkan nilai undefined karena ketika program dijalankan yg terjadi adalah
// creation phase (pembentukan)




// Creation Phase pada Global Context
// artinya Javascript akan mengecek apakah didalam program itu terdapat VARIABLE atau FUNCTION didalam
// source code kita, jika terdapat VARIABLE maka JS akan membuat VARIABLE yang diisi dengan undefined;
// jika terdapat FUNCTION, maka JS akan membuat KODE FUNCTION itu sendiri dan tidak dijalankan

// KONSEP INI DISEBUT DENGAN HOISTING


// nah Langkah selanjutnya baru menjalankan EXECUTION CONTEXT nya yaitu menjalankan program dari atas ke bawah

// Jika selama proses HOISTING itu terdapat sebuah function, maka Creation Phase nya akan dijalankan secara LOKAL


// ---------------------------------------------------------------------------------------------------------------


// Contoh lain
var nama = 'Abdu'
var umur = 20;

function sayHello() {
    return (`Halo nama saya ${nama}, umur saya ${umur} tahun`);
}
console.log(sayHello());



// ---------------------------------------------------------------------------------------------------------------



// Contoh lain
// var nama = 'Abdu'
// var username = '@abdurahman95_'

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/'
//     return instagramURL + username;
// }
// console.log(cetakURL(username));





// --------------------------------------------------------------------------------------------------------


// SCOPE itu adalah jika sebuah function tidak bisa menangkap argumen yang dikirimkan maka argument trsbt
// akan masuk kedalam OBJECT ARGUMENTS, contoh :
var nama = 'Abdu'
var username = '@abdurahman95_'

function cetakURL() {

    // untuk melihat arguments itu berada dimana, caranya panggil object yang namanya arguments :

    console.log(arguments);
    var instagramURL = 'http://instagram.com/'
    return instagramURL + username;
}
console.log(cetakURL('@abdurahman1'));