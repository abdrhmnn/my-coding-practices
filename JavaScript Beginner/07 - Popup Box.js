// Popup Box digunakan untuk user bisa berinteraksi dengan sistem
// Ada 3 buah popup box :
// 1. alert 
// 2. prompt
// 3. confirm

// alert('Hello World');
// alert('Halo');
// alert('Halo');


// var nama = prompt('Masukan Nama :'); 
// prompt ini adalah sebuah popup yang membutuhkan sebuah INPUT dari user
// dan mengembalikan Nilai yang diinputkan dari USER
// alert(`Halo, selamat datang ${nama}`);


// var tes = confirm('Kamu Yakin?');
// // digunakan untuk meminta konfirmasi dari user
// // mengembalikan nilai BOOLEAN

// if (tes === true) {
//     alert('Kamu Berhasil Yeayy!')
// } else {
//     alert('Kamu Gagal Yahhhh :(')
// }


// Penggabungan Ketiganya Popup
alert('Selamat Datang');
var lagi = true;

while (lagi) {
    var nama = toString(prompt('Masukan Nama Anda :'))
    // alert('Hello, Selamat Datang Kembali ' + nama.charAt(0).toLowerCase());
    console.log(typeof(nama));

    lagi = confirm('Coba Lagi?');
}
alert('Terima Kasih');