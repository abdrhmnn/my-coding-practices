// node js menawarkan bnyk core modules, disini hanya beberapa saja yg digunakan
// utk lebih lengkapnya bisa buka dokumentasinya langsung

// 1. file system module
// utk menuliskan sesuatu kedalam file sistem atau membaca isi file didalam direktori kita
const fs = require('fs')
// console.log(fs);

// menuliskan string ke file secara synchronous
// fs.writeFileSync('data/test.txt', 'Abdu')

// secara asynchronous
// fs.writeFile('data/test2.txt', 'Rahman', (callback) => {
//     console.log(callback);
// })


// membaca isi file secara synchronous
// console.log(fs.readFileSync('data/test.txt', 'utf-8')) // ubah dlu ke string, dgn encoding ke utf-8

// secara asynchronous
// console.log(fs.readFile('data/test2.txt', 'utf-8', (error, data) => {
//     console.log(data);
// }));


// 2. readLine module
const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// secara synchronous
rl.question('Masukan nama anda : ', (answer) => {

    // bisa jg buat lebih dari satu question
    rl.question('Masukan umur anda : ', (umur) => {
        // console.log(`Hello ${answer}, umur saya ${umur}`);
        
        // ini contoh kombinasi antara dua core modules node js
        const contact = {answer, umur} // bikin objek baru
        const fileBuffer = fs.readFileSync('data/test.json', 'utf-8') // baca buffer string
        const contacts = JSON.parse(fileBuffer) // convert string to json
        contacts.push(contact) // tambah objek baru

        fs.writeFileSync('data/test.json', JSON.stringify(contacts)) // tulis data dan
        // convert json to string
        
        console.log('Terima kasih telah memasukkan data!');

        // pindahan close nya question terakhir
        rl.close()
    })

    // tambahkan close utk membuat cmd nya kembali normal
    // rl.close()
})