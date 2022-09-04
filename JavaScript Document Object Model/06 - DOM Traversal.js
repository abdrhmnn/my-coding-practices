// DOM Traversal atau penulusuran DOM


// DOM Traversal
const close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {

        // jadi ini kita telusuri terlebih dahulu siapa PARENT dari tombol close nya dengan cara
        // gunakan fungsi parentElement
        // close[i].parentElement.style.display = 'none';


        // ! Tetapi kita juga bisa berikan sebuah PARAMETER EVENT didalam function nya yg nantinya akan digunakan
        // ! untuk membuat element parent nya ilang
        e.target.parentElement.style.display = 'none'; // caranya sama tapi hanya mekanisme saja yg berbeda
    });
}




// * Ini adalah cara yang lebih singkat dari yang sebelumnya
// close.forEach(function(el){
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     }
// })


// todo JENIS" DOM Traversal
const nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement); // ini untuk menseleksi element KAKEK dari class .nama
console.log(nama.nextSibling); // ini akan menseleksi ELEMENT SETELAHNYA (SAUDARA KANDUNG nya)
console.log(nama.previousElementSibling); // ini akan menseleksi ELEMENT SEBELUMNYA (SAUDARA KANDUNG nya)
console.log(nama.parentNode);



// * Perbedaan parentNode dan juga parentElement itu kalo parentNode akan membaca element SPASI atau ENTER
// * didalam file kita

// * Kalau parentElement itu akan membaca jenis ELEMENT nya saja tidak memperdulikan SPASI nya





// * Hasil OUTPUT dari fungsi DOM Traversal
// * 1. parentNode = node
// * 2. parentElement = element

// * 3. nextSibling = node
// * 4. nextElementSibling = element

// * 5. previousSibling = node
// * 6. previousElementSibling = element