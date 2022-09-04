// Object itu adalah kumpulan nilai yang memiliki NAMA
// Ciri" dari object yaitu dibuat didalam KURUNG KURAWAL

var orang = {
    nama: 'Abdu', // Ketiga ini disebut DENGAN PROPERTI
    umur: 20,
    pekerjaan: 'Mahasiswa',
    test: true,
    alamat: {
        jalan: 'Jl. ABC No. 123', // Kita bisa membuat OBJECT didalam OBJECT
        kota: 'Jakarta',
        negara: 'Indonesia'
    },
    nilai: [100, 214, 321, 400, 124, [100, 5392, 222]],
    teman: {
        teman1: ['Budi', 'Bagus', 'Ridwan', ['Amel', 'Asep']],
        teman2: 'Gak ada',
        Benda: {
            Benda1: ['Buku', 'Meja', 'Kursi', 'Sendok'],
            Benda2: ['HP', ['Gitar', 'Kipas', 'Sepeda', ['Motor']]]
        }
    },
    abdu: () => {
        alert('ok')
    },


    // sapa: function () {
    //     return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur +
    //         ' tahun, dan saya adalah seorang ' + this.pekerjaan;
    // }
    // Sebuah FUNCTION yang ada didalam OBJECT disebut dengan METHOD
}

orang.sapa = function () {
    return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur +
        ' tahun, dan saya adalah seorang ' + this.pekerjaan;
}

orang.abdu;

console.log(orang.sapa());
console.log(typeof(orang.test));


// Cara panggil object nya :
// orang.teman.teman2 = ini akan mencetak string "Gak ada"
// orang.["teman"]["Benda"]["Benda2"][1][3][0] = ini akan mencetak string "motor"
// orang.teman["Benda"].Benda1[0] = ini akan menghasilkan string "Buku"