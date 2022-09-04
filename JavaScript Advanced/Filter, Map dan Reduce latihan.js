// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-waktu]'));
// array.from utk mengubah isi element menjadi array


// pilih hanya yang  'JAVASCRIPT LANJUTAN'
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // textContent.includes itu artinya tolong carikan TULISAN JAVASCRIPT LANJUTAN yang terdapat didalam
    // textContent pada element video yang sudah kita ambil sebelumnya


    // ----------------------------------------------------------------------------------------------


    // ambil durasi masing2 video
    .map(item => item.dataset.waktu) // dataset ini utk mengambil data yang ada didalam artibut yang kita buat sendiri


    // -----------------------------------------------------------------------------------------------


    // ubah durasi menjadi float, ubah menit menjadi detik
    .map(durasi => {

        // 10:30 -> [10, 30] = pecah antara menit dan detik nya menjadi array
        const parts = durasi.split(':')
            // method split ini berfungsi untuk MEMECAHKAN elemen menjadi ARRAY dgn DELIMITER Tertentu
            // split dgn Delimiter nya atau Pembatasnya TITIK DUA (:)

            .map(part => parseFloat(part)); // utk mengubah setiap element nya menjadi PECAHAN angka


        // menit * 60 + detiknya = total detiknya
        return (parts[0] * 60) + parts[1];
    })


    // ------------------------------------------------------------------------------------------


    // jumlahkan semua total detiknya
    .reduce((accu, currt) => accu + currt);


// -----------------------------------------------------------------------------------------


// ubah formatnya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600); // bagikan total detiknya dengan 3600 dan bulatkan ke BAWAH hasilnya
jslanjut = jslanjut - jam * 3600;

const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;


// -----------------------------------------------------------------------------------------



// simpan di DOM durasi nya
const pDurasi = document.querySelector('.jumlah-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`


// simpan di DOM video nya
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} Video`



// console.log(jslanjut);