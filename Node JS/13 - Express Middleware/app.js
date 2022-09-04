// middleware adalah software yg menghubungkan software atau aplikasi lain

// alur kerja middleware pada web application
// request => (middleware(app)middleware) => respon

// express middleware, antara lain :
// - User-defined middleware => app-level, router, error-handling middleware
// - build-in middleware
// - third-party middleware


// urutan menjalankan middleware selalu dimulai dari atas sampai bawah

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


// ini adalah cth middlware
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})