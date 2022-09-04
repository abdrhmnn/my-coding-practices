function getPilihanCompt() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}
// ini adalah sebuah code yang sudah diringkas lagi code SEBELUMNYA

function getRules(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}
// ini code yang sudah diringkas dari code sebelumnya


// * ini adalah function untuk membuat pilihan COMPUTER seolah - olah mengacak
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () { // ini adalah sebuah FUNGSI untuk melakukan sesuatu secara berulang - ulang selama INTERVAL WAKTU TERTENTU
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}








// * Ini adalah cara RINGKAS nya dari code dibawah
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (ambilPilihan) { // ! didalam function ini adalah PARAMETER untuk mengambil isi dari setiap PENGULANGANNYA
    ambilPilihan.addEventListener('click', function () {
        // let userScore = 0;
        // let comptScore = 0;
        // const score1 = document.querySelector('.score1');
        // const score2 = document.querySelector('.score2');
        const pilihanCompt = getPilihanCompt();
        const pilihanPlayer = ambilPilihan.className;
        // let userWin;
        // let comptWin;
        const hasil = getRules(pilihanCompt, pilihanPlayer);

        putar();

        setTimeout(function () {
            // untuk mengganti gambar nya
            const gambar = document.querySelector('.img-komputer');
            gambar.setAttribute('src', 'img/' + pilihanCompt + '.png');

            // untuk menampilkan hasilnya
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            // if (userWin == "MENANG!") {
            //     userScore++;
            //     score1.innerHTML = 'SKOR: ' + userScore;
            // } else if (comptWin == "MENANG!") {
            //     comptScore++;
            //     score2.innerHTML = 'SKOR: ' + comptScore;
            // } else return;
        }, 1000);



    });
});




// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanCompt = getPilihanCompt();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getRules(pilihanCompt, pilihanPlayer);

//      untuk mengganti gambar nya
//     const gambar = document.querySelector('.img-komputer');
//     gambar.setAttribute('src', 'img/' + pilihanCompt + '.png');

//     untuk menampilkan hasilnya
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })



// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanCompt = getPilihanCompt();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getRules(pilihanCompt, pilihanPlayer);

//     untuk mengganti gambar nya
//     const gambar = document.querySelector('.img-komputer');
//     gambar.setAttribute('src', 'img/' + pilihanCompt + '.png');

//     untuk menampilkan hasilnya
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })



// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanCompt = getPilihanCompt();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getRules(pilihanCompt, pilihanPlayer);

//     untuk mengganti gambar nya
//     const gambar = document.querySelector('.img-komputer');
//     gambar.setAttribute('src', 'img/' + pilihanCompt + '.png');

//     untuk menampilkan hasilnya
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })