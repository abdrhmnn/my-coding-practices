const express = require('express')
const app = express()
const port = 3000

// kasih tau express bahwa kita pakai view engine ejs
app.set('view engine', 'ejs')

// aturan jika ingin menyimpan view hrs didalam folder views didalam root folder kita
// supaya express bisa otomatis mencari nama file nya


const data = [
    {
        nama: 'Abdu',
        email: 'Abdu@gmail.com'
    },
    {
        nama: 'Rahman',
        email: 'Rahman@gmail.com'
    },
]

// middleware selalu membaca dari atas sampai bawah

// APPLICATION LEVEL MIDDLEWARE
// middleware ini akan dijalankan di awal
// middleware ini akan selalu dijalankan untuk setiap request
app.use((req, res, next) => {
    console.log(`Time : ${Date.now()}`);
    next() // menjalankan middleware selanjutnya
})


// fungsi get, dll bisa jg diberikan fungsi next
app.get('/', function (req, res) {
    // res.sendFile('views/index.html', {root: __dirname})
    res.render('index', {
        // cara kirim data ke view nya, berikan key dan value pada objek
        nama: 'Abdu',

        // jika data yg dikirim banyak
        data,
        title: 'Home'
    })
})

// BUILD-IN MIDDLEWARE
// jika kita ingin mengakses file gambar, css, dll (assets) yg akan kita gunakan utk aplikasi
// kita, maka gunakan middleware express yg namanya express.static
// dan simpan semua assetsnya kedalam folder public
// app.use(express.static('public', {options}))

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About'
    })
})

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact'
    })
})

// app.get('/product', function (req, res) {
//     // res.render('index')
// })


// ini adalah cth middlware
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Port is listening on http://localhost:${port}`);
})