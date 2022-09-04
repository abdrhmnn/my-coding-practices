let objNama = {
    nama: 'abdu',
    umur: 21,
    alamat : 'jakarta'
}

let arrNama = [10, 20, 30, true]
let c = 200;
let d = 40;

const {nama, umur} = objNama
const [a, b] = [d, c]
const descObj = ({nama, umur}) => {
    console.log(`Halo ${nama}, umur saya ${umur}`);
    return null
}

console.log(nama);
console.log(b);
descObj(objNama);

const testProms = new Promise((resolve, reject) => {
    if ( c > 100){
        resolve('done')
    }else{
        reject('failed')
    }
}).then(result => {
    console.log(result);
    // console.log(typeof result);
}).catch(error => {
    console.log(error);
    // console.log(typeof error);
})

console.log(typeof testProms)

// console.log((c > 10 ? 'true' : 'false'));
