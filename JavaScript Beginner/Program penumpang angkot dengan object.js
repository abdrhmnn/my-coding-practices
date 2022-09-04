function Angkot1(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ', sudah ada didalam angkot!');
                return this.penumpang;
            } else if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return this.penumpang;
            }
        }
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            console.log('Angkot masih kosong!');
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    console.log(namaPenumpang + ' Sedang tidak ada didalam angkot !');
                    return this.penumpang;
                }
            }
        }
    }
}

var angkot2 = new Angkot1('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0);
console.log(angkot2);