// hanya bisa satu class parent saja

class Animal {
	constructor(mata) {
		this.mata = mata;
	}

	terbang() {
		console.log("terbang!");
	}
}

class Burung extends Animal {
	// jika ingin membuat consturc di child nya maka hrs implement construc parennya jg
	// walaupun di parent tdk membuat constructor
	constructor(mata) {
		super(mata); // call parent construc
		this.sayap = "hitam";
	}

	// akses method parent
	makan() {
		super.terbang(); // ini sama saja akses ke __proto__
		console.log("terbang dan makan!");
	}
}

const gagak = new Burung("hitam");
// console.log(gagak);
// gagak.terbang();
gagak.makan();
