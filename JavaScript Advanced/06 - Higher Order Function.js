// Higher Order Function adalah Function yang beroperasi pada function yg lain, baik itu digunakan didalam
// argumen maupun sebagai return value


// Tujuan membuat Higher Order Function itu adalah utk membuat kode kita menjadi lebih sederhana

// Contoh lain Higher Order Function sebagai argumen
function makan(nama, selesai) { // Function Makan ini disebut Higher Order Function
    console.log(`Halo ${nama}, selamat makan!`);
    selesai(); // dan parameter selesai ini disebut dengan callback
}

function selesai() {
    console.log('Terima kasih sudah makan ditempat ini :)')
}

makan('Abdu', selesai);


// -------------------------------------------------------------------------------------------------




// Contoh lain Higher Order Function sebagai return value
const abdu = (function ucapkanSalam(waktu) { // function ucapkan salam itu adalah Higher Order Function
    return function (nama) { // sedangkan return value ini adalah callback
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
})('Siang')
abdu('Abdu')