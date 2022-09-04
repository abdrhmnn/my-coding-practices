// adalah sebuah function yg dikirimkan sebagai parameter pada function lain

// cth synchrounous callback
// function halo(nama){
//     return alert(`halo ${nama}`)
// }

// function tampilPesan(callback){
//     const nama = prompt('masukan nama')
//     callback(nama)
// }

// tampilPesan(halo)


// cth asynchrounous callback
const obj = [
    {
    nama: 'abdu',
    umur: 20,
    hobby: 'main game 7ds',
    key: 1
    },
    {
    nama: 'rahman',
    umur: 21,
    hobby: 'main game 6ds',
    key: 1
    }
]

// obj.forEach(i => {
//     console.log(i);
// })
console.log('mulai');
for(const i of obj){
    console.log(i.nama); // jadi ini kita meminta data didalam array of objek 
} // jika data yg kita minta itu bnyk dan memerlukan waktu yg lama maka script yg ada dibawahkan akan
// menunggu sampai proses nya selesai

// nah ini dimakan proses blocking (synchrounous callback)
console.log('selesai');

// utk itu kita hrs ubah menjadi non-blocking (asynchrounous callback)
// ini menggunakan ajax murni dgn vanilla js

function getDataObj(url, success, error){
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4){ // ready state 4 itu artinya menggunakan asynchrounous veri ajax
            if(xhr.status === 200){
                success(xhr.response);
            }else if(xhr.status === 404){
                error()
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// ini jalan secara asynchrounous
console.log('mulai');

getDataObj('biodata.json', result => {
    // console.log(JSON.parse(result)); // json.parse digunakan utk mengubah (parsing) string json menjadi object
    const data = JSON.parse(result)
    for(const d of data) console.log(d.nama);
}, () => {
    alert(`Halo`)
})

console.log('selesai');

// jadi output yg dihasilkan adalah :
// mulai
// selesai
// abdu
// rahman