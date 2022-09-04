// Destructuring Variable adalah Expression pada Javascript yang memungkinkan kita dapat MEMBONGKAR
// nilai dari array atau properti dari object kedalam VARIABEL yang TERPISAH


// 1. Destructuring Array
const perkenalan = ['Halo', 'Nama', 'Saya', 'Abdu']
const perkenalan2 = ['Halo', 'Nama', 'Saya', 'Rahman']

// Menggunakan Destructuring Array, cukup buat nama VARIABLE yg mewakili tiap" ELEMENT dari arraynya
const [salam, satu, dua, ...name] = perkenalan;


// jika ada item dari Array yg ingin kita skip, maka caranya disebut dengan skipping items
// caranya cukup HAPUS VARIABLE nya tetapi tanda KOMA nya JANGAN dihapus
const [salam2, , , nama2] = perkenalan2;
console.log(nama2);


// Ini contoh dengan TEKNIK BIASA, ambil indeks dari Array
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// --------------------------------------------------------------------------------


// 1.1. Swap Items atau MENUKAR isi dari ARRAY
let a = 1,
    b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a] // jadi ini kita menukar isi dari variable a dan isi dari variable b
console.log(a);
console.log(b);

// Jadi BISA juga SINTAKS dari Destructuring ini untuk MENUKAR ISI dari VARIABLE



// ---------------------------------------------------------------------------------


// 1.2. Bisa digunakan sebagai return value pada function 
function coba() {
    return [1, 2]
}
const [c, d] = coba() // Jadi bisa juga DIPECAH Array nya kedalam VARIABLE" Tersebut
console.log(c);



// ----------------------------------------------------------------------------------------

// 1.3 Bisa digunakan sebagai Rest Parameter
const [e, ...array] = [1, 2, 3, 4, 5]
console.log(array);

const [abdu2, rahman2, umji2, eunha2] = array
console.log(umji2);
// jika isi dari array itu lebih banyak dari VARIABLE nya, silahkan gunakan Rest Parameter


// ------------------------------------------------------------------------------------



// 2. Destructuring Object
const mhs = {
    nama: 'Abdu',
    umur: 20
}
const { // VARIABLE yang digunakan HARUS memiliki NAMA yg SAMA dengan PROPERTI dari OBJECT nya
    nama,
    umur
} = mhs;
console.log(nama);



// ------------------------------------------------------------------------------------


// 2.1 Assignment tanpa Deklarasi OBJECT
({
    email,
    nim
} = {
    email: 'abdu@gmail.com', // Jadi ini kita tanpa Mendeklarasikan Object nya caranya masukan seluruh propertinya
    nim: 1093913 // kedalam isi dari Destructuring nya
})
console.log(nim);
// Hapus tanda const nya dan juga HARUS MENAMBAHKAN KURUNG BUKA DAN KURUNG TUTUP nya



// --------------------------------------------------------------------------------


// 2.2 Assign ke Variable BARU
const mhs2 = {
    nama2: 'Abdu',
    umur2: 20
}
const { // Jadi caranya GUNAKAN TITIK DUA lalu NAMA VARIABLE nya
    nama2: abdu, // ini untuk mengganti NAMA VARIABLE dari Destructuring Object nya
    umur2: rahman
} = mhs2;
console.log(rahman);



// ------------------------------------------------------------------------------


// 2.3 Memberikan Default Value pada Destructuring 
const mhs3 = {
    nama3: 'Abdu',
    umur3: 20
}
const {
    nama3,
    umur3,
    email3 = 'abdu@default.com' // Jadi ini kita berikan DEFAULT VALUE kepada email 
} = mhs3;
console.log(email3);
// Jadi JS akan mengecek terlebih dahulu, ada properti email3 ngak, jika tidak maka JS akan memakai NILAI DEFAULT
// nya, jika ADA maka yang dipakai adalah PROPERTI nya



// ----------------------------------------------------------------------------------


// 2.4 Menggabungkan antara assign ke var baru dan memberikan nilai default
const mhs4 = {
    nama4: 'Abdu',
    umur4: 20
}
const {
    nama4: umji,
    umur4: yerin,
    email4: eunha = 'eunha@default.com'
} = mhs4;
console.log(eunha);



// ----------------------------------------------------------------------------------


// 2.5 Rest Parameter pada Destructuring Object
const mhs5 = {
    nama5: 'Abdu',
    umur5: 20
}
const {
    nama5: yuju,
    ...object
} = mhs5;
console.log(object);


// -----------------------------------------------------------------------------------


// 3. Mengambil FIELD pada Object, setelah dikirim sebagai parameter untuk function
const mhs6 = {
    id: 123,
    nama6: 'Abdu',
    umur6: 20
}

function getIdMhs({
    id: abdu,
    nama6
}) { // Jadi ini yang ditangkap HANYA id nya SAJA, lalu SISANYA DIABAIKAN 
    return abdu;
}

console.log(getIdMhs(mhs6));

// Jadi ini data yang dikirim adalah OBJECT melalui console.log lalu yang ditangkap adalah OBJECT
// tetapi didalam parameter getIdMhs itu melakukan Pembongkaran terhadap OBJECT yang dikirim SEHINGGA hasil dari
// Pembongkarang trsbt adalah id

// Jika ingin hasilnya menghasilkan lebih dari SATU OBJECT, cukup tambahkan koma (,)


// ini contoh destructuring dgn array
const arr = [1, 2, 3, 4, 5]
function getIndeksArray([dataSatu, dataDua]) {
    return dataSatu
}

console.log(getIndeksArray(arr));


([sowon2, ...friends] = [1, 2, 3, 4, 5])
// ({nama, umur = {
//     nama: 'abdu',
//     umur: 21
// }})
console.log(friends);
([asd, dsa] = friends.filter(friend => friend > 2))
console.log(asd);

({
    nama10,
    umur10
} = {
    nama10: 'abdu',
    umur10: 20
})

console.log(nama10);