// for (init statement, kondisi, post statement)
for(let i = 0; i < 5; i++){ // jika semua didlm for tdk di isi maka akan invinite loop
    console.log(i);
}

// while (kondisi), pengulangan yg simpel tanpa init dan post statement jg bisa
let x = 0
while(x < 5){
    console.log(x);
    x++
}

// do while => melakukan pengulangan dlu (minimal sekali) baru mengecek kondisi nya
let y = 0
do{
    console.log(y);
    y++
}while(y > 5)

// for in, utk melakukan seluruh data nama property object atau index array (jarang utk array)
let objNama = {
    nama : 'abdu',
    umur : 21
}

for(let property in objNama){
    console.log(`Property ${property}, value ${objNama.property}`);
}

// for of, utk pengulangan terhadap isi value nya utk array atau data yg sifatnya iterable
let arrNama = ['abdu', 'rahman', 'eunha']
for(let nama of arrNama){
    console.log(nama);
}

let fullName = 'Abdurrahman'
for(let char of fullName){
    console.log(char);
}

// break dan continue
// break utk menghentikan seluruh perulangan (berhenti total)
let counter = 1;
while(true){
    console.log(counter);
    counter++

    if(counter > 10){
        break
    }
}
// continue
for(let i = 1; i <= 100; i++){ // klo for dia akan kembali ke post statement
    if (i % 2 == 0){ // tp klo while dia akan kembali ke kondisi
        continue
    }
    console.log(i);
}