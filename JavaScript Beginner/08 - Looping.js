// for, while dan do while
let jmlAngkot = 10;
let AngkotBeroperasi = 4;
let noAngkot = 1;

while (noAngkot <= AngkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}


for (noAngkot = AngkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}

do{
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}while(noAngkot < jmlAngkot);

// looping data array, bisa pake for atau foreach
const arr = [1, 2, 3, 4, 5]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((e,i) => {
    console.log(e);
});