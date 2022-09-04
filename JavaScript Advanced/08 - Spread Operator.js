// Spread Operator adalah sebuah operator yang memecah (expand) sebuah iterables menjadi sebuah
// atau single element

// iterable object : string, array, arguments / nodelist, typedarray, map, set, user-defined iterables

// cth simplenya :
const arr = ['abdu', 'rahman', 'umji']
console.log(...arr[0]); // tambahkan titik tiga utk memecah element pada array trsbt
// jika ingin mengakses berdasarkan indeks tertentu cara seperti diatas dan ini akan memecahkan
// string


// fungsi menggukan spread operator :

// 1. menggabungkan dua buah array
const arr2 = ['abdu', 'rahman', 'umji']
const arr3 = ['eunha', 'sowon', 'yerin']
const result = [...arr2, 123 ,...arr3]
// const result = arr2.concat(arr3) // bisa jg menggunakan method concat utk menggabungkan 2 array
console.log(result);



// 2. melakukan copy nilai pada array
const nama = ['abdu', 'rahman', 'eunha']
const namaCopy = [...nama] // ini kita buat salinan pada array nama dan salinan ini bisa kita ubah
console.log(namaCopy);

// contoh lain 
// saya coba ambil string yg ada didalam li dan dimasukkan kedalam array
const listNama = document.querySelectorAll('ul li')
console.log([...listNama]);
// const result2 = []
// for(const nama of listNama){
//     result2.push(nama.textContent)
//     console.log(result2);
// }

// ini cara kedua dgn menggunakan spread
const arrNama = [...listNama].map(nama => nama.textContent) // jd ini kita mengubah lngsung dari
// nodelist menjadi array dgn di spread
console.log(arrNama);



// latihan
const nama2 = document.querySelector('.nama')
const huruf = [...nama2.textContent].map(n => `<span>${n}</span>`).join('')

nama2.innerHTML = huruf