// const fs = require('fs')
// const readLine = require('readline')

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// utk mengecek apakah folder data dan file contacts.json sdh dibuat atau belum
// const dirPath = './data'
// const dataPath = './data/contacts.json'
// if(!fs.existsSync(dirPath)){
//     // buat direktori baru
//     fs.mkdirSync(dirPath)
// }

// if(!fs.existsSync(dataPath)){
//     // buat data baru
//     fs.writeFileSync(dataPath, '[]', 'utf-8')
// }


// rl.question('Masukan nama anda : ', (answer) => {
//     rl.question('Masukan umur anda : ', (umur) => {
//         const contact = {answer, umur}
//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
//         const contacts = JSON.parse(fileBuffer)
//         contacts.push(contact)

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
        
//         console.log('Terima kasih telah memasukkan data!');
//         rl.close()
//     })
// })

// ubah kode questionnya menjadi bentuk promise utk di refactoring menggunakan async await
// karena akan terjadi callback hell klo questionya semakin banyak

// const pertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (answer) => {
//             resolve(answer)
//         })
//     })
// }
// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan email anda : ', (email) => {
//             resolve(email)

//         })
//     })
// }

// variabel fungsi utama aplikasi
// const {pertanyaan, simpanContact} = require('./Contacts)
// const contact = require('./Contacts')
// const main = async () => {
//     const nama = await contact.pertanyaan('Masukan nama anda : ')
//     const email = await contact.pertanyaan('Masukan email anda : ')

//     contact.simpanContact(nama, email)
// }

// main()


// mengambil argumen dari command line, node app (argument)
// console.log(process.argv); // process itu adalah objek yg dimiliki oleh node js

// const command = process.argv[2] // menangkap command stlh path file

// menggunakan package yargs, utk membaca argumen secara elegant
const yargs = require('yargs')
const { simpanContact, listContact, detailContact, deleteContact } = require('./Contacts')
// console.log(yargs.argv);
// yargs.command('add', 'Menambahkan kontak baru', () => {}, (argv) => {
//     console.log(argv);
// })

// objek type
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        simpanContact(argv.nama, argv.email)
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email
        // }
        // console.log(contact);
    }
}).demandCommand() // utk tambahin warning jika gk ada argumen yg dimasukkan


// command utk menampilkan semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua list contact',
    handler(){
        listContact()
    }
})


// command utk menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail list contact',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        detailContact(argv.nama)
    }
})


// command utk menghapus data sebuah contact
yargs.command({
    command: 'remove',
    describe: 'Menghapus contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        deleteContact(argv.nama)
    }
})

yargs.parse()