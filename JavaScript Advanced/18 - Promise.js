// adalah sebuah object yg mewakili keberhasilan atau kegagalan dari sebuah event yg asynchronouse
// yg akan terjadi di masa yg akan datang

// janji(terpenuhi / ingkar)
// states(fulfilled / rejected / pending)

// pending itu waktu tunggu nya sblm janji nya terpenuhi atau tidak

// jadi utk menjalankan 3 keadaan diatas ada 3 callback yg hrs diingat :
// resolve = janji terpenuhi
// reject = janji tdk terpenuhi
// finally = ketika waktu tunggu nya selesai baik itu janji nya dipenuhi maupun tdk dipenuhi

// dan didalam promise ini ada aksi yang dilakukan ketika janjinya terpenuhi dan tidak terpenuhi
// then = terpenuhi
// catch = tidak terpenuhi

// fetch('http://www.omdbapi.com/?apikey=dbd155ce&s=one piece')


// promise dipake biasanya ketika kita ingin merequest ke API



// contoh 1
let ditepati = false
const janji1 = new Promise((resolve, reject) => { // parameternya adalah dua yaitu resolve dan reject
    if(ditepati) {
        resolve('Janji telah ditepati!')
    }else{
        reject('Janji tidak ditepati')
    }
}).then(result => {
    
})

// console.log(janji1);

// jika ingin tangkap resolve dan reject nya bisa menggunakan method then atau catch

// ini kalo terpenuhi / berhasil
janji1.then(response => { // response kita bisa berikan nama yang bebas (mau apa aja)
    console.log('OK! : ' + response);
})
// ini kalo tidak terpenuhi / gagal
.catch(response => {
    console.log(`YAHHH :( ${response}`);
})



// contoh 2
let ditepati2 = false
const janji2 = new Promise((resolve, reject) => {
    if(ditepati2) {
        setTimeout(() => {
            resolve('Ditepati setelah menunggu selama 2 detik')
        }, 2000)
    }else{
        setTimeout(() => {
            reject('Tidak ditepati setelah menunggu selama 2 detik')
        }, 2000)
    }
});

// supay keliatan asynchrounous
console.log('mulai');

// jika ingin pending nya tdk kelihatan maka pindahan console.log ini kedalam method then atau catch
// console.log(janji2.then(response => {
//     console.log(response);
// }));

janji2
 // method ini dijalankan ketika salah satu dri then atau catch sudah siap di jalankan
 // finally ini biasanya digunakan utk animasi loading
.finally(() => console.log('selesai menunggu!'))
.then(response => { console.log('OK! : ' + response); })
.catch(response => {
    console.log(`YAHHH :( ${response}`);
})

console.log('selesai');


// didalam promise memiliki method all (Promise.all)
// ini utk menjalankan ketika punya banyak Promise dan akan dijalankan sekaligus

// contoh, misal kita ingin koneksi ke 2 API secara langsung
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Abdu',
            sutradara: 'rahman',
            pemeran: 'eunha'
        }])
    }, 1000)
})


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Jakarta',
            temp: 25,
            kondisi: 'cerah berawan'
        }])
    }, 500)
})


// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

// utk menjalankan semua Promise
Promise.all([film, cuaca])
    .then(response => console.log(response))


    // dgn menggunakan Promise kita bs menyelesaikan masalah Callback Hell (callback yg terlalu banyak)