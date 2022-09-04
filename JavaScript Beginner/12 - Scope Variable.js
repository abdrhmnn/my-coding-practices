var a = 0; // Ini disebut dengan variable GLOBAL / window scope
// Jika ingin var global ini bisa diakses kedalam function maka tambahkan window.a kedlm function nya

function tes() {
    let b = 10 // Ini disebut dengan variable LOKAL, jadi var b ini hanya bisa dipanggil didalam function nya saja

    console.log(window.a)
    // Keyword let yang ada didalam function itu HARUS ditulis jika ingin mendeklarasikan nya menjadi sebuah variable LOKAL, jika tidak maka JS akan melihat ke luar dari function nya dan akan meniban nilai variable global yang sebelumnya sudah dibuat
    
    // Dan juga ketika kita mendeklarasikan sebuah parameter didalam function, parameter tersebut akan menjadi variable LOKAL
}
tes();
// console.log(a);

console.log(5 == false);