// Async (Asynchronous Function)

// jadi async adalah function yg bekerja secara asynchronous (melalui event loop), yg menghasilkan
// (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yg
// syncronouse (standard)

// implisit promise mengembalikan promise walaupun didalam function tersebut tidak terdapat kode yg
// asynchronous

// contoh 
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)
// })

// ini akan menghasil Promise pending karena coba dijalankan secara synchronouse
// dan jg kita langsung console.log sih coba nya
// klo mau liat hasilnya masukan dulu kedalam method then or catch

// .then(response => console.log(response))

// console.log(coba);



function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5000
        if ( waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, 2000)
        }else{
            reject('kelamaan')
        }
    })    
}

// const coba = cobaPromise()
// console.log(coba);

// function diatas blm bisa digunakan utk async dan await caranya buat function lg utk manggil function
// diatas

async function cobaAsync(){

    try{
        // jadi sblm dijalanin kita tunggu dulu sampai Promise nya resolve
        const coba = await cobaPromise()
        console.log(coba);
    }catch(err){ // pesan yg ada didalam reject nya itu msk ke parameter err nya
        console.error(err);

        // console.error utk membuat tulisannya warna merah
    }
}

cobaAsync()

// kita tidak bisa menjalankan method then dan catch pada async function utk gunakan block try catch
// jika begitu ketemu keyword await JS akan berasumsi Promise nya sudah resolve padahal hasil dri Promise
// itu adalah rejected
