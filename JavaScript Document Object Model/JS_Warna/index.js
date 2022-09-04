console.log(Math.random() * 1);
// sebenarnya tidak perlu untuk menseleksi body nya karena body
// sudah memiliki sintaks khusus yaitu : document.body

const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function () {
    // warna.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda');
});

const tombol2 = document.createElement('button');
const text = document.createTextNode('Warna Acak');
tombol2.appendChild(text);
tombol.after(tombol2);

// tambahan method :
// 1. .after() = fungsi utk menambahkan element setelahnya
// 2. .before() = fungsi utk menambahkan element SEBELUMNYA, sama seperti fungsi insertBefore()


tombol2.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1); // Ini artinya akan menghasilkan NILAI ACAK 
    // antara 1 sampai 255
    // fungsi Math.round itu digunakan untuk PEMBULATAN ANGKA
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});





// Kasus 3
// Gunakan cara yang lebih Efektif lagi
const warna = document.querySelectorAll("input[type='range']");
warna.forEach(function (slide) {
    slide.addEventListener('input', function () {
        const r2 = document.getElementById('slice1').value;
        const g2 = document.getElementById('slice2').value;
        const b2 = document.getElementById('slice3').value;
        // console.log(r2, g2, b2, alpha);
        document.body.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
    })
})



// sl1.addEventListener('input', function () {
//     const r1 = sl1.value; // fungsi value ini digunakan untuk MENGAMBIL NILAI yang ada didalam ELEMENT INPUT
//     const r2 = sl2.value;
//     const r3 = sl3.value;
//     document.body.style.backgroundColor = 'rgb(' + r1 + ',' + r2 + ',' + r3 + ')';

// });

// sl2.addEventListener('input', function () {
//     const r1 = sl1.value;
//     const r2 = sl2.value;
//     const r3 = sl3.value;
//     document.body.style.backgroundColor = 'rgb(' + r1 + ',' + r2 + ',' + r3 + ')';

// });

// sl3.addEventListener('input', function () {
//     const r1 = sl1.value;
//     const r2 = sl2.value;
//     const r3 = sl3.value;
//     document.body.style.backgroundColor = 'rgb(' + r1 + ',' + r2 + ',' + r3 + ')';

// });



// event "input" itu untuk menangkap kegiatan secara REALTIME
// event "change" itu fungsinya akan mengganti kegiatan setelah MOUSE nya ditahan dan di click
// event "mousemove" itu fungsinya akan melakukan fungsinya ketika MOUSE nya digerakkan



document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    // console.log(event.clientX); // clientX ini untuk mengetahui KORDINAT SUMBU X nya, dan harus nempel
    // dengan SEBUAH OBJECT YANG DI KIRIM KE DALAM FUNCTION


    // ukuran browser
    // console.log(window.innerWidth); // innerWidth berfungsi untuk mengetahui LEBAR dari DOCUMENT
    // console.log(window.innerHeight); // innerHeight berfungsi untuk mengetahui TINGGI dari DOCUMENT


    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // ini artinya kita akan menseleksi kordinat X dan Y lalu kalikan dengan 255 dan dibungkus dengan
    // fungsi Math.round maka akan menghasilkan angka BULAT antara 1 - 255
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    // console.log(xPos, yPos);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'

})