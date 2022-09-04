const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb'); // ! Ambil semua ELEMENT THUMBNAIL nya
container.addEventListener('click', function (e) {

    // cek apakah yang di klik adalah thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade'); // ! Ini untuk menghapus class fade dgn durasi 0,5 DETIK
        }, 500);

        thumbs.forEach(function (thumb) {
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        })

        e.target.classList.add('active');
    }

})