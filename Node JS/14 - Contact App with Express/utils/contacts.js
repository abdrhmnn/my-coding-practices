const fs = require('fs')

const dirPath = './data'
const dataPath = './data/contacts.json'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const findContact = id => {
    const contacts = loadContact()
    const contact = contacts.find((data) => data.id == id)
    return contact
}

const addContact = data => {
    const contacts = loadContact()
    contacts.push(data)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

const deleteContact = data => {
    const contacts = loadContact()
    const newContact = contacts.filter((contact) => contact.id !== data )
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact))
    // console.log(newContact);
}

const updateContact = data => {
    const contacts = loadContact()
    const filteredContacts = contacts.filter(contact => contact.id !== data.id)
    // console.log(filteredContacts, data);
    filteredContacts.push(data)
    fs.writeFileSync('data/contacts.json', JSON.stringify(filteredContacts))
}

module.exports = { loadContact, findContact, addContact, deleteContact, updateContact }