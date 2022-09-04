function sayHello(nama){
    console.log(`Hello ${nama}`);
}

function tambahData(a, b){
    return console.log(a + b) // jika ingin mengembalikan lebih dari satu data, maka bisa gunakan array
}

// bisa juga didlm function banyak return value
function getFinalScore(value){
    if (value > 90){
        return "A"
    }else if(value > 70){
        return "B"
    }else{
        return "C"
    }
}

// keyword return jg bisa digunakan utk menghentikan eksekusi function atau pengulangan
// return true atau return

sayHello(10)
tambahData(10, 20)
console.log(getFinalScore(68))

// Optional Parameter, tidak wajib mengirimkan parameter ke dalam function
// jika tdk mengirimkan parameter maka nilainya undefined
// maka dari itu berikan nilai default
function optionalParam(a = 1, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

optionalParam()

// Rest parameter, mengirim data sebanyak banyaknya kedalam parameter, hanya boleh satu rest
// dan posisinya paling akhir dan return array
function sum(nama, ...data){
    console.log(nama);
    console.log(data);
}

sum('abdu', 10, 20, true, false, -0, 'eunha')

// jika kita ingin mengirim data array ke rest parameter
// namnya spread sintaks
let arrAngka = [10, 20, 5, 6]
sum('spread sintax', ...arrAngka)

// callback function, yaitu function yg dijadikan sebagai value variabel dan parameter
function sayHello2(nama){
    console.log(`Hello ${nama}`);
}

let func = sayHello2
func('abdu22')

function giveMeName(name){
    name('rahman')
}

giveMeName(func)

// anonymous function
let anonimFunc = function (nama){
    console.log(`hai, ${nama}`);
}

anonimFunc('jj')

// inner function, function yg ada didalam function
function luar(){
    function dalam(){
        console.log('abdu');
    }

    // function dalam hanya bisa diakses didalam function luar saja
}

// let jalan = luar()
// jalan()

// scope
let globalScope = 10
function nama(){
    let localScope = 100
}

// rekursif
function ulang(angka){
    if(angka === 1){
        return 1
    }else{
        return angka - ulang(angka - 1)
    }
}

console.log(ulang(10));

// arrow function
const namaSaya = nama => console.log(`hai, ${nama}`);

namaSaya('yihhi')

// export {sayHello}