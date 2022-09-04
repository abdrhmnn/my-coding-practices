// this
// this adalah sebuah keyword spesial yang secara otomatis itu didefinisikan didalam FUNCTION
// this itu isinya adalah SEBUAH OBJECT WINDOW atau OBJECT GLOBAL


// Cara berbeda membuat OBJECT

// 1. cara 1 - function declaration || Tiap" cara Mengembalikan NILAI YANG BERBEDA 
function halo() {
    console.log(this);
}
halo(); // bisa juga dipanggil dengan cara this.halo()
// this akan MENGEMBALIKAN OBJECT GLOBAL



// 2. cara 2 - Object Literal
var obj = {
    nama: 'Abdu',
    umur: 20,
    alamat : function(){
        console.log(`Hello ${this.nama}`);
    }
};
obj.halo = function () { // Ini artinya kita akan membuat sebuah METHOD didalam object 
    console.log(this);
}
obj.halo(); // bisa juga dipanggil dengan cara this.obj.halo()
// this ini akan MENGEMBALIKAN NILAI OBJECT



// 3. cara 3 - Constructor
function Object(nama, nim) {
    this.nama = nama;
    this.nim = nim;
} // jadi function diatas akan disalin jika kita menggunakan this ini maka kita akan membuat 
// sebuah object yang baru ketika this ini ditambahkan 


var obj3 = new Object("abdu", 310191); // bisa juga dipanggil dengan cara new this.Object()
// this akan MENGEMBALIKAN OBJECT yang baru DIBUAT
console.log(obj3);