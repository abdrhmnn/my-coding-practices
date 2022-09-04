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
        e.stopPropagation(); // * Ini fungsi untuk MENGHENTIKAN EVENT BUBBLING
    })
})


// * EVENT BUBBLING
const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        alert('ok');
    })
})











// todo JENIS" DOM Traversal
const nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement); // ini untuk menseleksi element KAKEK dari class .nama
console.log(nama.nextElementSibling); // ini akan menseleksi ELEMENT SETELAHNYA (SAUDARA KANDUNG nya)
console.log(nama.previousElementSibling); // ini akan menseleksi ELEMENT SEBELUMNYA (SAUDARA KANDUNG nya)





// * EVENT BUBBLING adalah sebuah cara dimana sebuah child ELEMENT yang sudah diberikan EVENT dan PARENT dari
// * child tersebut juga memiliki sebuah EVENT maka ketika EVENT pada child dijalankan, yang PARENT nya  
// * juga nanti akan dijalankan 








// JADI INI ADALAH SEBUAH CONTOH DIMANA KITA BISA LANGSUNG MENAMBAHKAN ELEMENT HTML DIDALAM BROWSER NYA
// CARANYA ITU CUKUP TANGKAP PEMBUNGKUS CONTAINER NYA 
// const container = document.querySelector('.container');
// container.addEventListener('click', function (e) {
//     if (e.target.className == 'close') { // * fungsi .className digunakan utk mengecek sebuah nama CLASS
//         e.target.parentElement.style.display = 'none';
//     } else if (e.target.getAttribute('alt') == 'bg') {
//         alert('halo')
//         e.stopPropagation();
//     }
// })