// Refactoring adalah sebuah proses yang mengubah kode agar menjadi lebih baik lagi tanpa mengubah fungsionalitasnya

// program dibawah ini akan kita refactoring menjadi program yang lebih sederhana lagi
var a = 8;
var b = 3;

function jumlahVolumeDuaKubus(a, b) {
    var total, volumeA, volumeB
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;
    return total;
}
console.log(jumlahVolumeDuaKubus(8, 3));


// REFACTORING
function jumlahVolumeDuaKubus2(a, b) {
    return a * a * a + b * b * b; // jadi kode diatas bisa kita singkat menjadi seperti ini
}
console.log(jumlahVolumeDuaKubus2(5, 10));

// ini menggunakan arrow function
const jumlahVolumeDuaKubus3 = (a, b) => a * a * a + b * b * b
console.log(jumlahVolumeDuaKubus3(10, 20))