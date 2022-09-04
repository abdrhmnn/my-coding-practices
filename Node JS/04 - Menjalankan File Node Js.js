// utk menjalankan file js di runtime node, caranya bisa ketika 'node [namaFile]'
// jika nama file js kita itu index.js
// maka gaperlu tulis namaFile ketika ingin jalankan di runtime node nya
// jadi cukup 'node .'

// kedepannya jika aplikasi kita sdh besar dan bnyk file node js nya
// tp yg dijalankan satu file aja yaitu app.js atau index.js

// untuk menghubungi file utama dgn file js lainnya, maka gunakan require()
// dan telusuri path nya, jika dia satu folder, maka
require('./01 - Apa itu Node JS')

// jika dia ada diluar folder
require('../fileName')

// jika dia ada didalam folder yg lain
require('./folderName/fileName')


// node js menganut konsep module, ketika kita menghubungkan file utama dgn node js lainnya
// maka file utama tdk bisa menggunakan function atau variabel yg dibuat didalam file
// yg dihubungkannya

// supaya bisa menjalankannya, maka tambahkan keyword
// 'module.exports = function/variabelName'