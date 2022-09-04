// jika kita menggunakan node, maka konteksnya bkn lagi didalam browser tpi sudah didalam
// sistem operasi kita

// Asynchronous
const getUserAsync = (id, callback) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1 ? 'Abdu' : 'Rahman'
        // klo proses dari timeout sdh selesai baru jalankan callback nya
        callback({id: id, nama: nama})
    }, time)
}

const userSatu = getUserAsync(1, (hasil) => {
    console.log(hasil);
})

const userDua = getUserAsync(2, (hasil) => {
    console.log(hasil);
})

console.log('selesai');