const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { constants } = require('buffer')
// const readLine = require('readline')

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

const dirPath = './data'
const dataPath = './data/contacts.json'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// const pertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (answer) => {
//             resolve(answer)
//         })
//     })
// }

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const simpanContact = (nama, email) =>{
    const contact = { nama, email }
    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    // const contacts = JSON.parse(fileBuffer)
    const contacts = loadContact()

    // mengecek duplikat nama contact
    const duplikatContact = contacts.find((contact) => contact.nama === nama)
    if(duplikatContact){
        console.log(chalk`{red Nama sudah ada, silahkan masukan nama lain!}`);
        return false
    }

    // cek email ada atau tidak dan valid atau tidak
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk`{red Silahkan masukan email yang valid!}`);
            return false
        }
    }

    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log(chalk`{green Terima kasih sudah memasukkan data!}`);

    // hapus close supaya aplikasinya selesai dijalankan
    // rl.close()
}


const listContact = () => {
    const contacts = loadContact()

    console.log(chalk`{green Daftar Kontak!}`)

    // telusuri isi dari contacts
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.email}`);
    })
}


const detailContact = (nama) => {
    const contacts = loadContact()

    // contacts.forEach((contact, i) => {
    //     if(contact.nama == nama){
    //         console.log(chalk`{green Detail Kontak ${nama}}`)
    //         listContact()
    //     }else{
    //         console.log(chalk`{red Daftar Kontak tidak Ditemukan!}`)
    //     }
    // })
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase() )
    
    if(!contact){
        console.log(chalk`{red ${nama} tidak Ditemukan!}`)
        return false
    }

    console.log(chalk`{green Detail Kontak ${nama}}`)
    console.log(`${contact.nama} - ${contact.email}`);
}


const deleteContact = (nama) => {
    const contacts = loadContact()
    const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase() )

    if(contacts.length === newContact.length){
        console.log(chalk`{red ${nama} tidak Ditemukan!}`)
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact))
    console.log(chalk`{green Kontak ${nama} berhasil dihapus!}`)
}

module.exports = { simpanContact, listContact, detailContact, deleteContact }