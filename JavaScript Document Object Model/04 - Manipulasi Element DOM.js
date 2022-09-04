// Manipulasi Element





// 1. element.innerHTML = untuk merubah ISI dari sebuah TAG yang sudah kita SELEKSI

// const judul = document.getElementById('judul');
// judul.innerHTML = '<i>Abdu</i>'; // jadi kita bisa ISIKAN apapun didalam inner.HTML ini termasuk
// tag HTML lainnya

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World'; // jadi ini kita akan MENGGANTIKAN SELURUH ELEMEN yang ada
// didalam section#a menjadi tulisan HELLO WORLD





// 2. element.style.<property> = untuk merubah STYLE atau CSS dari sebuah ELEMEN yang sudah kita SELEKSI

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'salmon';
// simple saja cukup gunakan tag CSS kedalam style nya







// 3. element.setAttribute() = untuk memanipulasi sebuah ATRIBUT yang ada didalam sebuah ELEMEN

const judul = document.getElementsByTagName('h1')[0];
judul.addEventListener('click', function () {
    judul.classList.toggle('background-cl');
})
// Jadi kita bisa menambahkan sebuah Atribut kedalam SEBUAH ELEMEN, contoh diatas maksudnya
// kita akan memberikan atribut "name" dan valuenya yaitu "Abdu"
// dan juga dengan menggunakan setAttribute ini akan MENIMPA nama dari ATRIBUT SEBELUMNYA



const a = document.querySelector('section#a a');
a.setAttribute('link', 'satu');
if (a.getAttribute('link') == 'satu'){
    alert("yohohohos")
}

// Terdapat 2 method untuk melihat dan menghapus atribut, caranya :
// a.getAttribute('link'); // ini fungsinya untuk MELIHAT ISI dari sebuah ATRIBUT
// a.removeAttribute('link'); // ini fungsinya untuk MENGHAPUS ATRIBUT






// 4. element.classList = untuk memanipulasi sebuah CLASS
// terdapat beberapa METHOD yang ada didalam classList, yaitu :

const p = document.querySelector('.p2');



// 1. element.classList.add() = untuk menambahkan sebuah class
// 2. element.classList.remove() = untuk menghapus sebuah class
// 3. element.classList.toggle() = Jika suatu element tidak memiliki class maka toggle akan menambahkannya
// dan menghasilkan nilai TRUE jika element tersebut sudah memiliki class 
// maka togle akan MENGHILANGKAN CLASS TERSEBUT dan menghasilkan NILAI FALSE



// 4. element.classList.item() = untuk mengetahui nama CLASS tertentu didalam sebuah ELEMENT
// contoh jika kita ingin mengetahui NAMA class ke DUA didalam element p, maka :
console.log(p.classList.item(1));


// 5. element.classList.contains() = untuk MENGECEK apakah element tersebut SUDAH memiliki class atau BELUM
// dengan cara MENGECEK nama CLASS nya
// jika ada akan menghasilkan NILAI TRUE, jika tidak ada akan MENGHASILKAN NILAI FALSE
// contoh, p.classList.contain('p2') = true, karena class p2 sudah ada 




// 6. element.classList.replace() = untuk MENGGANTIKAN CLASS yang ada menjadi CLASS yang BARU
// contohnya, p.classList.replace('tiga', 'empat');
// ini artinya kita akan MENGGANTI nama class tiga menjadi EMPAT