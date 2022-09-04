// Tagged template adalah bentuk yg lebih kompleks dari Template Literals, memungkinkan kita utk membaca
// template literals melalui function

// Jadi ketika kita membuat TAGGED TEMPLATE maka TEMPLATE STRING yg kita buat itu akan DILEWATKAN dulu kedalam FUNCTION dari
// Tagged TEMPLATE nya



const nama = 'Abdu'
const umur = 20;

function coba(strings, ...args) {

    // ketika kita jalankan Tagged Template ini dengan menggunakan SATU PARAMETER SAJA, maka akan memecah tiap" 
    // string yang ada didalam TEMPLATE LITERAL nya dan dipisahkan oleh Expression lalu menghasilkan nilai ARRAY

    // return args;


    // Ini untuk menggabungkan antara STRINGS yg dipisahkan sebelumnya dgn Expression nya, caranya gabungkan sesuai dengan index nya
    // masing", seperti Indeks ke 0 dari strings akan digabungkan dengan indeks ke 0 dari args


    // forEach memiliki 2 PARAMETER, yang pertama mewakili TIAP" ELEMENT dari strings
    // yg kedua adalah INDEKS nya

    // let result = ''
    // strings.forEach((str, i) => { 
    //     result += `${str}${args[i] ? `${args[i]}` : ''}`  // Ini CONTOH dengan menggunakan TERNARY
    //     result += `${str}${args[i] || ''}` // Ini CONTOH dengan menggunakan OR

    //     Bisa menggunakan Ternary atau OR untuk menghilangkan NILAI UNDEFINED di akhir dari INDEKS nya
    // })
    // return result;





    // dari kode dengan menggunakan Looping diatas, bisa dengan menggunakan Reduce dgn lebih RINGKAS lagi
    // reduce memiliki 3 PARAMETER, 1 = accumulator, 2 = currentValue dan 3 (Optional) = INDEKS 
    // Jadi ini kita akan menggabungkan antara result, str (Tiap" elemen array), dan juga tiap" INDEKS nya
    // dan juga kita Berikan nilai AWAL yaitu STRING KOSONG
    return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '')

    // return strings;
}


// nama dan umur masuk ke PARAMETER selanjutnya didalam tag template

// didalam Javascript yg baru utk meminimalisir banyak nya Expression yang dimasukkan kedlm parameter maka
// lebih fleksibel gunakan REST PARAMETER
// Rest Parameter adalah menampung SELURUH EXPRESSION yang ada didalam template Literals NYA
// cara buatnya ...(namaVariable) dan MENGHASILKAN NILAI ARRAY

const str = coba `Halo nama saya ${nama}, saya umur ${umur} tahun.`
console.log(str);





// ----------------------------------------------------------------------------------------------

// Alasan memisahkan antara STRINGS dan juga Expression didalam Tagged Template, yaitu salah satunya untuk Menambahkan Highlight
// kedalam KEYWORD PENCARIAN, seperti dibawah ini :

// Contoh penerapan Tagged Template dgn Highlight

const nama2 = 'Eunha'
const umur2 = 20;
const email = 'Abdu@gmail.com' // jika kita menambahkan ELEMENT baru kedalam Tagged template nya maka akan secara otomatis
// menambahkan HIGHLIGHT ke dalam ELEMENT BARU TERSEBUT

function highlight(strings, ...args) {
    return strings.reduce((result, str, i) => `<span class="hl3">${result}</span><span class="hl2">${str}</span><span class="hl">${args[i] || ''}</span>`, '')

    // Jadi ini kita melakukan sebuah Highlight kepada MASING" dari ARRAY nya, seperti "str" itu kita berikan
    // class hl2 dan INDEKS nya kita berikan class hl serta HASIL PENGGABUNGANNYA kita berikan Highlight juga yaitu class hl3

}


const str2 = highlight `Halo nama saya ${nama2}, saya umur ${umur2} tahun, dan email saya ${email} tahun.`
document.body.innerHTML = str2



// ----------------------------------------------------------------------------------------------


// Latihan
const nama3 = 'eunha'
const umur3 = 20
const email2 = 'eunha@gmail.com'

function coba3(str, ...on) {
    let result = ''
    str.forEach((str, i) => {
        result += `${str}<span class="hl">${on[i] || ''}</span>`
    })

    return result

    // str.reduce((hasilA, str2, i2) => `${hasilA}${str2}${i2 || ''}`,'')

    // console.log(on);
}

const hasil = coba3 `Halo semuanya, nama saya ${nama3} dan umur saya ${umur3} tahun. Email saya ${email2}`