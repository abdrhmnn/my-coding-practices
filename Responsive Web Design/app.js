const myArray = ['abdu', 'rahman', 'ganteng']
for ( let i = 0; i< myArray.length; i++){
    console.log(myArray[i]);
}

function test(kata){
    Array.from(kata)
    return kata
}

console.log(test(['Abdu Rahman', 1, false]))