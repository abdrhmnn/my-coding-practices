// Kita bisa membuat OBJECT secara Literal yaitu cara yang sudah digunakan sebelumnya
// Selain itu ada lagi cara lain dalam pembuatan object :
// 1. Dibuat dengan function Declaration
// 2. Dengan menggunakan Constructor Function (keyword new )
// 3. Dengan menggunakan method Object.create()

// Membuat Object dengan Object Literal
var mhs = {
    nama: 'Abdu', // nama, nim, email dan jurusan itu adalah KEY nya
    nim: 4128919,
    email: 'abdu.com',
    jurusan: 'Sistem Informasi'
}


// Membuat Object dengan Function Declaration
function buatObjectMhs(nama, nim, email, jurusan) {
    var mhs = {}; // Jadi kita buat terlebih dahulu object nya 
    mhs.nama = nama; // lalu kita isikan kedalam object tersebut dengan VALUE yang SAMA dengan
    mhs.nim = nim; // PARAMETER dari FUNCTION nya
    mhs.email = email;
    mhs.jurusan = ['Hello World'];

    return mhs; // Setelah itu kembalikan Nilai dari OBJECT tersebut
}

// Dan berikan ARGUMEN untuk setiap PARAMETER nya caranya seperti dibawah
var mhs3 = buatObjectMhs('Abdu', 418210, 'Abdu.com');

// Sekarang kita bisa menambahkan data MHS dengan lebih FLEKSIBEL dibanding dgn menggunakan cara
// Object Literal, seperti dibawah ini. Tinggal kita buat sebuah VARIABLE BARU
var mhs4 = buatObjectMhs('Rahman', 131331, 'Rahman.com', 'Teknologi Informasi');


// Contruction Function
// Membuat Object dengan Constructor Function (keyword new)
// Constructor itu adalah SEBUAH FUNCTION KHUSUS untuk membuat OBJECT
// Untuk membuat OBJECT dgn cara Construct, NAMA dari FUNCTION nya HARUS dibuat seperti sebuah MODUL
// Berikan nama nya selalu diawali dengan HURUF KAPITAL, seperti Mahasiswa, Dosen, dll
function Mahasiswa(nama, nim, email, jurusan) {

    // Tetapi kalo dengan constructor KEDUA HAL itu tidak diperlukan cukup tulis this.namaValue nya
    // saja dan juga sesuaikan dengan NAMA dari PARAMETER FUNCTION nya

    // ini sama seperti kita memberikan var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan = ['Sistem Informasi'];

    // dan return this;
}

var mhs5 = new Mahasiswa('Abdu', 123121, 'abdur.com');
// Untuk memanggil OBJECT yang dibuat dengan cara CONSTRUCT
// Harus MENAMBAHKAN KEYWORD "new", seperti contoh diatas