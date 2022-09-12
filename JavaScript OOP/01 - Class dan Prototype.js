// prototype adalah pewarisan dari suatu objek

class Mahasiswa {
	// constructor
	constructor(alamat) {
		// buat property hrs di dalam construc
		// bisa jg buat method didalam construc
		this.nama = "abdu";
	}

	// secara default membuat method didlm class itu akan ditambahkan kedalam prototype
	jalan(action) {
		console.log(`${this.nama} sedang berjalan`);
	}
}

const abdu = new Mahasiswa("satu");
const eunha = new Mahasiswa();

// menabah prototype pada class mahasiswa
Mahasiswa.prototype.umur = 20;

// urutan akses prototype :
// 1. akses ke dalam objek nya
// 2. akses ke __proto__
// 3. akses ke Object

abdu.umurAbdu = 20;
abdu.makan = () => {
	console.log("abdu sedang makan");
};
console.info(abdu.nama);
console.info(eunha);
eunha.jalan();
