// adalah framework node js yg diperlukan dalam membuat sebuah aplikasi dgn stack teknologi
// MERN, MEAN, MEVN

// dalam framework itu dibagi menjadi 2 jenis :
// - opinionated = aturan" utk mengguakan framework tersebut sudah jelas
// - unopinionated = tidak ada aturan baku utk membuat sesuatu (flexibel) => Express

// database yg bisa digunakan di express : MySQL, PostgreSQL, SQLite, dll (liat di web nya)

// respon adalah apa yg dikembalikan oleh node js atau express ketika kita mengtarget
// path atau alamat tertentu

// request adalah apa yg dikirimkan ke express nya

const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    // res.send('Hello World')

    // set yg dikembalikan adalah json
    // res.json({
    //     nama: 'abdu',
    //     umur: 21
    // })

    // bisa jg mengembalikan isi dari file
    res.sendFile('./index.html', {
        root: __dirname,
        nama: 'abdu'
    })
})

app.get('/about', function (req, res) {
    res.send('Hello About')
})

app.get('/contact', function (req, res) {
    res.send('Hello Contact')
})

// cth penggunaan request
app.get('/product/:id/category/:idCategory', (req, res) => {
    res.send(`Product dengan ID : ${req.params.id}, Category ID : ${req.params.idCategory}, Nama anda adalah ${req.query.nama}`)
    // bisa juga mengelola query string pada url
})

app.use('/', (req, res) => {
    res.status(404) // ubah status nya menjadi 404 : page not found
    res.send('<h1>404</h1>')
}) // utk menangkap semua request, jika middleware yg diakses tidak ada

app.listen(port, () => {
    console.log(`Port is listening on http://localhost:${port}`);
})