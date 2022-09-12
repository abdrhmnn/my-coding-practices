// adalah mewakili argument pada function dengan jumlah yg tidak terbatas menjadi sebuah array

function jumlahkan(...angka) {
	// let total = 0
	// for ( const a of angka){
	//     total += a
	// }
	// return total

	return angka.reduce((total, curr) => total + curr, 10);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// cth rest parameter utk destructuring array dan objek
const arr = [1, 2, 3, 4, 5];
const [angka1, ...angkaSisanya] = arr;
console.log(angkaSisanya);

const obj = {
	nama: "abdu",
	umur: 20,
	hobby: "main game 7ds",
};

const { nama, ...others } = obj;
console.log(others);

// latihan utk mengecek inputan hanya number saja
function filterBy(type, ...values) {
	return values.map((value) => {
		if (typeof value === type) {
			return value;
		}
	});

	// return values.filter(value => typeof value === type)
}

console.log(
	filterBy("number", 1, 2, "abdu", true, 100, "rahman", false, 20)
);
