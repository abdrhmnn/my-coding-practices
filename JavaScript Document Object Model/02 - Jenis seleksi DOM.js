// Terdapat beberapa fungsi yang kita bisa gunakan untuk Menseleksi DOM :
// 1. getElementById() = kita memilih elemen yang ada didalam DOM kita berdasarkan "id" nya 
// dan menghasilkan NILAI ELEMENT


// 2. getElementsByTagName() = untuk mencari elemen" yang memiliki NAMA TAG TERTENTU 
// dan menghasilkan NILAI HTMLCollection


// 3. getElementsByClassName() = untuk mencari elemen" yang memiliki NAMA CLASS TERTENTU 
// dan menghasilkan NILAI HTMLCollection


// 4. querySelector() =  digunakan untuk mencari elemen BERDASARKAN SELECTOR nya 
// dan menghasilkan NILAI ELEMENT


// 5. querySelectorAll() = digunakan untuk mencari elemen BERDASARKAN SELECTOR nya 
// dan menghasilkan NILAI nodeList


// contohnya :

// 1. document.getElementById()
const judul = document.getElementById('judul');
// ini akan mengembalikan SEBUAH ELEMENT (HANYA SATU NILAI)
// contoh singkat manipulasi DOM
judul.style.color = 'aquamarine'; // Jika kita menggunakan JS, kalo kita memberikan style ke sebuah element
// itu OTOMATIS MENAMBAHKAN INLINE CSS
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Abdu'; // ini untuk mengganti isi dari element judul nya






// 2. document.getElementsByTagName()
const p = Array.from(document.getElementsByTagName('li'));
// p[0].style.backgroundColor = 'yellow';
// p[1].style.backgroundColor = 'skyblue'; // jadi dgn menggunakan TagName kita tidak langsung mengakses
// style nya secara LANGSUNG, harus memberikan SEBUAH INDEKS karena cara ini akan MENGEMBALIKAN NILAI
// ARRAY !!


p.forEach(e => e.style.backgroundColor = 'yellow')


// jika ingin semua warnanya sama, gunakan LOOPING :
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'yellow';
// }


// kita juga bisa memindahkan indeks nya disamping dari TAG NAME nya itu sendiri, seperti :
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';






// 3. document.getElementsByClassName() -> Mengembalikan NILAI ARRAY
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah oleh JavaScript';





// 4. document.querySelector() -> Menghasilkan ELEMENT (HANYA SATU SAJA)
// selector ini yang dimaksud adalah SELECTOR CSS
const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'red';

const li2 = document.querySelector('li:nth-child(2)'); // cukup pindahkan SELECTOR CSS nya kedalam document
li2.style.color = 'blue';





// 5. document.querySelectorAll -> Menghasilkan nodeList (Array) sama seperti HTMLCollection
// querySelector ini akan menseleksi SEMUA ELEMEN dihalaman HTML sesuai dari SELECTOR CSS nya
const p2 = document.querySelectorAll('p');
for (let i = 0; i < p2.length; i++) {
    p2[i].style.color = 'orange';
}

// p2.forEach(e => e.style.color = 'red')
console.log(p2);


// Untuk mengubah node root nya atau mempersempit selector nya, caranya :
// const ba = document.querySelector('#b');
// const ba2 = ba.getElementsByTagName('p')[0];
// Jadi document (node root) nya bisa diubah dengan DOM tertentu