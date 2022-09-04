// Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// Jadi bisa dikatakan sebuah fungsi yang dijalankan didalam fungsi dan juga rekursif itu
// harus berakhir dan harus menghasilkan nilai

// Kondisi berhenti dari rekursif itu disebut dengan Base Case
// adalah kondisi akhir dari rekursif yang menghasilkan nilai

for (var i = 10; i >= 1; i--) {
    console.log(i);
}
// dari bentuk pengulangan diatas, maka kalo diubah menjadi bentuk rekursif adalah

function tampilAngka(n) {
    if (n === 0) {
        return; // kondisi if inilah yang disebut dengan BASE CASE
    }
    console.log(n);
    tampilAngka(n - 1); // ini maksudnya setiap looping yang terjadi maka akan dikurangkan satu
}
tampilAngka(10);