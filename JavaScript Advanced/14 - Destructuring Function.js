// Destructuring Function Return Value

// function kalkulasi(a, b) {
//     return [a + b, a * b, a / b, a - b]
// }
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, ...hasil] = kalkulasi(2, 3);
// console.log(hasil.join(' - '));

// Jika kita menggunakan array sebagai return value maka URUTAN dari VARIABEL nya itu PENTING

// ---------------------------------------------------------------------------

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

let data = [1, 2, 3].map(e => ({
    nama: 'abdu'
}))

// const {
//     kurang: abdu,
//     kali,
//     bagi,
//     tambah
// } = kalkulasi(2, 3);
// console.log(kurang);

// Jika kita menggunakan OBJECT sebagai return value nya maka URUTAN dari VARIABEL nya TIDAK BERPENGARUH


// ----------------------------------------------------------------------------------------


// Destructuring Function Arguments
const mhs1 = {
    nama: 'abdu',
    umur: 20,
    email: 'Abdu@gmail.com',
    nilai: {
        nilaiTugas: 80,
        nilaiUTS: 85,
        nilaiUAS: 75
    },
    makan: {
        berat: 'Mie Goreng',
        ringan: {
            Junkfood: 'Ciki',
            Cemilan: 'Mogi-Mogi'
        },
        hobi: {
            ruangan: 'Main Games',
            luar: 'Main Bola'
        }
    },
    Games: {
        rpg: 'Lost Laga',
        moba: ['Mobile Legends', 'AOV', 'Lokapala'],
        farm: 'Harvest Moon'
    }
}


// Jadi ini kita PECAH didalam CONSOLE LOG nya
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));


// -------------------------------------------------------------------------------------------


// Ini cara yang TIDAK memakai Destructuring
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`

//     // Jadi tiap" properti dari OBJECT itu akan dipecah didalam return valuenya
// }
// console.log(cetakMhs(mhs1));



// -------------------------------------------------------------------------------------------


// Dengan Destructuring

function cetakMhs({ // Jadi ini kita PECAHKAN semua OBJECT didalam ARGUMENT NYA
    nama,
    umur,
    nilai: {
        nilaiUAS: abdu // Jadi bisa juga kita PECAH CHILD dari OBJECT didalam arguments
    },
    makan: {
        ringan: {
            Cemilan // Jadi bisa juga kita PECAH CHILD dari OBJECT didalam arguments
        },
        hobi: {
            ruangan // Jadi bisa juga kita PECAH CHILD dari OBJECT didalam arguments
        }
    },
    Games: {
        moba // Jadi bisa juga kita PECAH CHILD dari OBJECT didalam arguments
    }
}) {
    return cetakMhs`Halo, nama saya ${nama}, saya berumur ${umur} tahun. dan nilai UAS saya adalah ${abdu}, lalu makanan kesukaan saya adalah ${Cemilan} dan hobi saya adalah ${ruangan} lalu Games kesukaan saya adalah ${moba[0]}`
}

// function test(strings, ...args) {
//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`)
// }


console.log(cetakMhs(mhs1));

// `<ul>
//     ${moba.map(games => `<li>${games}</li>`).join('')}
// </ul>`



const arr4 = ['abdu', 'rahman', 'umji']
function descArr(arr4){
    return `Halo ${arr4}`
}

console.log(descArr(arr4))