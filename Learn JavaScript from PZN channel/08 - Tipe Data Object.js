// adalah tipe data yg hampir sama dgn array hanya saja index nya berupa string bukan number
let objNama = {
    // jika penamaan dari properti itu lebih dari satu kata, gunakan petik dua
    first : "abdu",
    // "nama" : 10
    "nama depan" : 2000,
    nama : function(){
        console.log(`Hello, ${this.first}`);
    },
}

let arrNama = ['abdu', 'rahman']

objNama['nama'] = 10
objNama.nama = 200
objNama.nama()

console.log(typeof(objNama));
console.table(objNama)

// kita juga bisa mengecek apakah sebuah property atau index berada didalam object atau array
// dan tidak mengecek valuenya, bisa gunakan keyword 'in' return boolean

console.log("first" in objNama);
console.log(1 in arrNama);