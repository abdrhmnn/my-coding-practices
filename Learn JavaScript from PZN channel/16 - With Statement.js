// utk menurunkan scope data yg akan diakses dari sebuah object
let objNama = {
    nama : 'abdu',
    umur : 21,
    alamat: 'jakarta'
}

console.log(objNama.nama);
console.log(objNama.umur);
console.log(objNama.alamat);

// dgn with
with (objNama){
    console.log(nama);
    console.log(umur);
    console.log(alamat);
}

// tidak direkomendasikan untuk digunakan krn akan membuat kode nya menjadi ambigu