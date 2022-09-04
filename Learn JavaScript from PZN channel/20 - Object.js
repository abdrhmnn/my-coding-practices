// cara buat objek itu ada 2 yaitu : objek literal dan constructor function
function Dog(name){
    this.name = name
}

// setiap contruc itu punya yg namanya prototype, utk digunakan sebagai prototyping dari
// construc tersebut

Dog.prototype = {
    // utk membuat data property tdk mengoverwritten data property miliki construc
    // maka tambahkan property khusus
    constructor: Dog,
    color: 'brown',
    walk: function(){
        console.log(`Hello ${this.name} and i have ${this.color}`);
    }
}

let firstDog = new Dog('dogi')

// mengecek sebuah instance
console.log(firstDog instanceof Dog); // true
console.log(firstDog.constructor === Dog); // true

// objek yg sdh dibuat itu akan inherit menjadi sebuah prototype
console.log(Dog.prototype.isPrototypeOf(firstDog)); // true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));