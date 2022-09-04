// * Event Handler
// const kartu = document.querySelectorAll('.card');
// const silang = document.querySelectorAll('.close');
// silang.addEventListener('click', function () {
//     kartu.style.display = 'none';
// })



// DOM Traversal
const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {

//          jadi ini kita telusuri terlebih dahulu siapa PARENT dari tombol close nya dengan cara
//          gunakan fungsi parentElement
//          close[i].parentElement.style.display = 'none';

//          ! Tetapi kita juga bisa berikan sebuah PARAMETER EVENT didalam function nya yg nantinya akan digunakan
//          ! untuk membuat element parent nya ilang
//         e.target.parentElement.style.display = 'none'; // caranya sama tapi hanya mekanisme saja yg berbeda
//     });
// }




// * Ini adalah cara yang lebih singkat dari yang sebelumnya
close.forEach(function (el) {
    el.addEventListener('click', function (e) { // * e adalah OBJECT EVENT
        e.target.parentElement.style.display = 'none';
        // e.preventDefault(); // ! Ini berfungsi untuk menghentikan AKSI DEFAULT suatu ELEMENT
    })
})


// todo JENIS" DOM Traversal
const nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement); // ini untuk menseleksi element KAKEK dari class .nama
console.log(nama.nextElementSibling); // ini akan menseleksi ELEMENT SETELAHNYA (SAUDARA KANDUNG nya)
console.log(nama.previousElementSibling); // ini akan menseleksi ELEMENT SEBELUMNYA (SAUDARA KANDUNG nya)



// * Prevent default adalah sebuah method yang ada didalam sebuah OBJECT EVENT INI
// * TUJUAN dari Prevent Default ini adalah untuk menghentikan AKSI DEFAULT yang dilakukan oleh
// * SEBUAH ELEMENT