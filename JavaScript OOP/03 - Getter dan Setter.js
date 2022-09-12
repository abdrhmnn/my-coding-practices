class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(value) {
		const fullName = value.split(" ");
		this.firstName = fullName[0];
		this.lastName = fullName[1];
	}
}

const abdu = new Person("abdu", "rahman");
console.log(abdu.fullName);
abdu.fullName = "Eunha Yerin";
console.log(abdu.fullName);

// public class field
class Kendaraan {
	// public class field yaitu property yg dibuat diluar dri construc
	// ada dua visibility yaitu public (defualt) dan private (hanya bs diakses didlm class)
	// msh tahap development di beberapa browser
	// dan setiap pcf akan nempel di instance objek
	ban;
	stang;
	bensin = 0;

	// private field
	#knalpot;

	// private method
	#berjalan() {
		console.log("kendaraan berjalan!");
	}
}

class Elektronik {
	// static field -> property yg melekat pd class itu sendiri bkn pada instance objek
	// biasa nya digunakan untuk data yg digunakan secara global (akses or ubah dimanapun)
	static kondisi = "Bagus";

	// static method
	// method punya class nya bukan lg berada di prototype
	static menyalakan() {
		console.log("Menyalakan elektronik");
	}
}

const honda = new Kendaraan();
const televisi = new Elektronik();

// cara mengakses static field or method
console.log(Elektronik.kondisi);
Elektronik.menyalakan();
