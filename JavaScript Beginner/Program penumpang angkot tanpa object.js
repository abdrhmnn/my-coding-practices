var penumpang = ['Abdu', undefined, 'Eunha'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;

                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi 
            else if (i == penumpang.length - 1) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);

                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log('Nama Penumpang ' + namaPenumpang + ' Sudah Ada !');

                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang yang turun
        console.log('Angkot masih kosong');

        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                penumpang[i] = undefined;

                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika tidak ada nama yang sesuai
            else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Tidak ada didalam angkot');

                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}