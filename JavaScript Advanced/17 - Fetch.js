// adalah sebuah API pada JS yg baru, tugasnya utk mengambil data secara asynchronous (seperti ajax, jquery)

// fetch adalah fungsi didalam JS yg mengembalikan Promise

// parameter didalam fetch = resource dan init

// init merupakan konfigurasi yang kita lakukan untuk melakukan request dan yg dikirim merupakan sebuah
// json, didalamnya terdapat : method (get, post, dll), headers, body, mode, cache, dll.

// dan didalam response itu ada property dan juga method yg kita bisa gunakan
// utk lebih lanjutnya lihat di docs MDN

// contoh mengubah kode dari latihan callback menggunakan fetch :

const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function () {


    const inputKeyword = document.querySelector('.input-keyword')

    // parameter wajib ny adalah resource URL nya
    fetch('http://www.omdbapi.com/?apikey=dbd155ce&s=one piece' + inputKeyword.value)
        .then(response => console.log(response.json()))

        // data yg dikembalikan dari response itu kita tidak bisa lihat Object nya
        // utk bisa lihat gunakan method json()


        // kalo ingin menjalankan promise secara asynchronous maka kita hrs menambahkan then lagi
        // karena data respon diatas msh statusnya Pending atau mengembalikan Promise
        .then(response => {

            // cara ini sama seperti di latihan callback hanya saja disini menggunakan fetch
            const movies = response.Search
            let cards = ''
            movies.forEach(movie => cards += showCards(movie))

            // masukan kedalam element movie-container
            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards


            // ketika tombol dari show details di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button')
            for(const button of modalDetailButton){
                button.addEventListener('click', function(){
                    
                    // jadi ini artinya kita mengambil value dari data-imdbid yg dimiliki oleh
                    // modalDetailButton
                    const imdbid = this.dataset.imdbid
                    fetch('http://www.omdbapi.com/?apikey=dbd155ce&i=' + imdbid)
                        .then(response => response.json())
                        .then(response => {
                            const movieDetail = showCards(response)
                            const modalMovie = document.querySelector('.modal-movie')
                            modalMovie.innerHTML = movieDetail
                        })
                })
            }
        })

})



function showCards(movie){
    return `<div class="col-md-4 my-5">
            <div class="card" style="width: 18rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="">
            <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
        <a href="#" class="btn btn-primary modalDetailButton" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbid}">Show Details</a>
                </div>
            </div>
        </div>`
}