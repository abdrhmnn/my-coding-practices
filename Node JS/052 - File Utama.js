// const sayHello = require('./051 - File Exports')

// untuk require file yg lebih dari satu, cara require buat nama variabelnya sama dgn
// parameter di requirenya
const coba = require('./051 - File Exports')
// import { sayHello, data } from "./051 - File Exports"

// dan variabel coba itu akan menjadi objek

console.log(coba.sayHello('abdu'));
console.log(coba.data);