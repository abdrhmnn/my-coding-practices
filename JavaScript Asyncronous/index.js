// async adalah proses dimana kode program dijalankan terpisah dengan kode yg berjalan secara sync
// jadi kode yg berjalan secara async bisa ditampilkan kapan saja tanpa hrs menunggu proses
// dari kode trsbt selesai atau namanya non-blocking

// callback di async
// yaitu mengirimkan informasi dari proses asyncronous

// contoh async function bawaan js setTimeout dan setInterval
console.log("awal...");
setTimeout(() => {
	console.log("muncul...");
}, 3000);
console.log("menunggu...");
