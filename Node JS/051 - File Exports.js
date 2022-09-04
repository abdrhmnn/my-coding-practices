function sayHello(nama){
    return `Hello ${nama}`
}

const data = 21

// module.exports = sayHello

// jika ingin mengexports data lebih dari satu, maka cara buat method dan property
// di module.exports nya
// module.exports.sayHello = sayHello // method
// module.exports.data = data // property


// data yg dikirim ke exports itu bisa apa saja (method, objek, array, variabel, class, dll)

// kita jg bisa mengirimkan bnyk data dlm satu kali exports, yaitu
// module.exports = {
//     sayHello: sayHello,
//     data: data
// }

// jika nama property dgn valuenya sama, maka bisa diringkas
module.exports = { sayHello, data }
// export default { sayHello, data }