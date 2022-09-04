// DOM Manipulation Part 2



// buat elemen baru
const pBaru = document.createElement('p').appendChild(document.createTextNode("halo"));

// buat tulisan untuk Element baru yang baru kita buat
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan nya kedalam paragraf
pBaru.appendChild(teksPBaru); // append itu artinya Menambahkan 


// simpan pBaru diakhir section A
const sectionA = document.querySelector('section#a');


// simpan sectionA kedalam tempat yang kita inginkan
sectionA.appendChild(pBaru);


// .appendChild itu maksudnya SIMPAN ke akhir dari SEBUAH ELEMENT PARENT






// studi kasus lain

// Pertama Buat elemen baru dan juga teks nya serta gabungkan keduanya
const liBaru = document.createElement('li');
const itemBaru = document.createTextNode('Item Baru');
liBaru.appendChild(itemBaru);
// Pertama Buat elemen baru dan juga teks nya serta gabungkan keduanya




// setelah itu tangkaPARENT dari elemen li nya
const ul = document.querySelector('section#b ul');





// dan Tangkap ELEMENT setelah elementnya, jadi maksud ini kita akan menambahkan ELEMENT li baru sebelum
// li item ke 2
const li2 = ul.querySelector('section#b ul li:nth-child(2)');




// Tambahkan element barunya dgn mengisi 2 parameter :
// 1. node baru nya yang kita ingin simpan
// 2. akan disimpan sebelum element apa ?, yaitu sebelum element li2
// tetapi sebelumnya kita panggil parent nya terlebih dahulu, seperti contoh dibawah ini
// ul.insertBefore(liBaru, li2);
li2.before(liBaru);




// Remove dan Replace Node
// 1. Remove
const secA = document.querySelector('section#a');
const link = document.getElementsByTagName('a')[0];

secA.removeChild(link); // Jadi ini kita akan menghapus salah satu child "link" didalam PARENT section#a





// 2. Replace
const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Hello World');
h2Baru.appendChild(textH2Baru);

secB.replaceChild(h2Baru, p4);














// LATIHAN

const p2 = document.querySelector('.p2');
const aBaru = document.createElement('a');
const textA = document.createTextNode('Hello World');
aBaru.appendChild(textA);
aBaru.setAttribute('href', '#');

p2.before(aBaru);


const li4 = document.querySelector('section#b li:nth-child(4)');
ul.removeChild(li4);


const img = document.createElement('img');
img.setAttribute('src', 'bg.jpg');
img.style.width = '50px'
img.style.height = '50px'
ul.replaceChild(img, li2);