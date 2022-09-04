// Events adalah merepresentasikan sebuah kejadian yang terjadi didalam DOM, seperti kejadian 
// bisa dilakukan oleh user saat (mouse,event,keyboard,dll) digerakkan


// Terdapat 2 cara untuk menjalankan sebuah event : 
// 1. Event Handler 
// 2. addEventListener() 





// 1. Event Handler
// Untuk melakukan event handler itu ada 2 :
// - kita bisa simpan sebagai element HTML
// untuk cara yang ini gunakan property yang namanya onclick ="" didalam element HTML kita
const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.classList.toggle('biru-muda')
}

// p3.onclick = ubahWarna

// - kita bisa simpan sebagai method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna; // untuk method gunakan seperti ini




// 2. addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('dblclick', function () {
    const liBaru = document.createElement('li');
    const itemBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(itemBaru);
    liBaru.style.backgroundColor = 'aquamarine'
    const ul = document.querySelector('section#b ul');
    ul.appendChild(liBaru);
});




// PERBEDAAN KEDUANYA :
// Jika kita menggunakan Event Handler maka SETIAP PERUBAHAN yang terjadi AKAN di "TIMPA"
// Jika kita menggunakan addEvenetListener maka SETIAP PERUBAHAN yang terjadi akan di "TAMBAHKAN"