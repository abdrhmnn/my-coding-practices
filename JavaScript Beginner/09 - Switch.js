// Switch itu sama seperti IF ELSE hanya saja, switch cuma membutuhkan satu KONDISI saja
// Sintaks Umum switch
// switch(ekspresi) {
// case "nilai 1"
//  aksi 1
//   [break;]
// case "nilai 2"
//  aksi 2
//   [break;]
// default:
//  aksi default
//   [break;]
// }

let ulang = true;
while (ulang) {
var item = prompt('Masukan nama makanan : \n (cth: nasi, daging, susu, hamburger, softdrink)')
// prompt itu selalu menghasilkan output yang bertipe data STRING

    switch (item) {
        case 'nasi':
            alert('Makanan / Minuman SEHAT!');
            break; // break ini berfungsi untuk menghentikan proses dari SWITCH
        case 'daging':
            alert('Makanan / Minuman SEHAT!');
            break;
        case 'susu':
            alert('Makanan / Minuman SEHAT!');
            break;
        case 'hamburger':
            alert('Makanan / Minuman TIDAK SEHAT!');
            break;
        case 'softdrink':
            alert('Makanan / Minuman TIDAK SEHAT!');
            break;
        default:
            alert('Anda memasukkan nama makanan / minuman yang salah!');
            break;
    }
    ulang = confirm('mau pilih lagi ?');
}
alert('Terima kasih sudah memilih!, Yeaayyy')