const express = require('express')
const { loadContact, findContact, addContact, deleteContact, updateContact } = require('./utils/contacts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// middleware utk form input, gunakan build-in middleware urlencoded
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/contact', (req, res) => {
    const contacts = loadContact()
    res.render('contact', {
        title: 'Contact',
        contacts: contacts
    })
})

app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Tambah Contact',
        contact: loadContact()
    })
})

app.get('/contact/delete/:id', (req, res) => {
    const contact = findContact(req.params.id)
    if(!contact){
        res.status(404).send('Page Not Found')
    }else{
        deleteContact(req.params.id)
        res.redirect('/contact')
    }
})

app.get('/contact/update/:id', (req, res) => {
    const contact = findContact(req.params.id)
    res.render('update-contact', {
        title: 'Update Contact',
        contact
    })
})

app.post('/contact', (req, res) => {
    // data yg dikirim akan masuk ke req.body
    // dan data tersebut harus diparsing terlebih dahulu, cara nya gunakan middleware
    // console.log(req.body);
    // res.send(req.body)
    addContact(req.body)
    res.redirect('/contact') // redirect ini akan kembali ke route dgn method nya GET
})

app.post('/contact/update', (req, res) => {
    updateContact(req.body)
    res.redirect('/contact')
})

app.get('/contact/:id', (req, res) => {
    const contact = findContact(req.params.id)
    // console.log(typeof req.params.id);
    res.render('detail', {
        title: 'Detail Contact',
        contact
    })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})


app.listen(port, () => {
    console.log('Server is listening on http://localhost:' + port);
})