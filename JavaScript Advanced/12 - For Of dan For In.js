// For..of adalah looping untuk iterables object
// iterable object : string, array, arguments / nodelist, typedarray, map, set, user-defined iterables

// contoh nya :
const arr = ['abdu', 'rahman', 'umji']
for ( const a of arr){ // buat satu variable yg mewakili element didalam arraynya
    console.log(a);
}

// cth looping utk string
const nama = 'abdu'
for ( const n of nama ) console.log(n) // ini akan me looping tiap" karakter pada string nya


// for..of ini secara default kita tdk bisa mengakses indeks nya utk itu cara ngakalin nya gunakan
// method entries()
for ( const [a, b] of arr.entries()){ // dan kita destructuring variable nya supaya bisa dpt indeks nya
    console.log(`Halo nama saya ${b}, saya indeks ke-${a}`);
}


// cth looping utk nodelist
const listNama = document.querySelectorAll('.nama');
for(const nama of listNama){
    console.log(nama.textContent);
}


// cth looping utk arguments
function jumlahkanAngka(){
    let jumlah = 0
    for(const arg of arguments){
        jumlah += arg;
    }
    return jumlah
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5))



// for..in adalah looping enumerable (property pada objek)
const mhs = {
    nama: 'abdu',
    umur: 20,
    email: 'abdu@gmail.com'
}

for(const m in mhs){
    // console.log(m);

    console.log(mhs[m]); // ini utk mengambil value dari msng" propertynya
}