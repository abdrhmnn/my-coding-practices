let arrKosong = ['rahman']
let arrNama = ['abdu', 'rahman', 'umji', 'eunha']
console.log(arrNama[2]);
arrKosong.push('satu')
arrKosong.pop()
arrKosong.unshift('dua')
// arrKosong.shift()
console.table(arrKosong); // console.table utk mencetak array supaya lebih mudah diliat
delete arrKosong[0] // hapus data sekaligus indexnya tp kita jg bisa akses kembali index yg di delete
arrKosong[1] = 10
console.table(arrKosong);
console.log(arrNama.length);
console.log(arrKosong.length);