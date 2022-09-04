var tanya = true;
while (tanya) {
    // Menangkap pilihan player
    var p = prompt('Silahkan Pilih \ncth: ( gajah, semut, orang )');


    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.round(Math.random() * 3); 
    // Math.random ini adalah sebuah LIBRARY dari JS yang digunakan utk menentukan ANGKA
    // 1 SAMPAI 3 secara RANDOM


    if (comp < 1) {
        comp = 'gajah';
    } else if (comp >= 1 && comp < 2) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }


    // Menentukan rules
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        //     if ( p == 'orang' ){
        //         hasil = 'Menang';
        //     }else {
        //         hasil ='Kalah!';
        //     }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        alert('Memasukkan pilihan yang salah!');
        break;
    }


    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya Kamu ' + hasil);

    tanya = confirm('Mau main lagi?');
}

alert('Terima Kasih sudah Bermain! Yeayyy')