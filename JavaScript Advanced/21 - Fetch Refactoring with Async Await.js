// memperbaiki kode fetch dari latihan sebelumnya


const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword')
    
    // memindahkan proses yg sama kedalam sebuah function
    const movies = await getMovies(inputKeyword.value)
    
    console.log(movies); // ini mengembalikan Promise karena kita function getMovies dijalankan secara
    // synchronous

    // nah utk membuat function getMovies berjalan secara asynchronous cara gunakan async dan await
    // cara nya tambahkan keyword async didepan function yang ingin kita kasih tau ke JS bahwa akan ada
    // proses yg berjalan secara asynchronous dlm hal ini adalah function callback di eventlistenernya

    // dan kasih tau lg ke js, proses yg mana yg akan dijalankan secara asynchronous yaitu proses
    // dari function getMovies, cara nya tambahkan keyword await didepan functionnya
    
    updateUI(movies)
})



// memberikan teknik event binding utk proses klik show details nya
// event binding adalah event yang akan kita berikan ke element yg awalnya blm ada tapi ketika dia ada
// event nya tetap bisa dijalankan

document.addEventListener('click', async function(element){

    // ini maksudnya hanya menarget element yg memiliki nama class tersebut
    if(element.target.classList.contains('.modal-detail-button')){
        const imdbid = element.target.dataset.imdbid
        const movieDetail = await getMovieDetail(imdbid)
        updateUIDetail(movieDetail)
    }
})



function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=dbd155ce&s=one piece' + keyword)
        .then(response => console.log(response.json()))
        .then(response => response.Search)
}

function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=dbd155ce&i=' + imdbid)
        .then(response => response.json())
        .then(response => { response })
}

function updateUI(movies){
    let cards = ''
    movies.forEach(movie => cards += showCards(movie))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
}

function updateUIDetail(response){
    const movieDetail = showCards(response)
    const modalMovie = document.querySelector('.modal-movie')
    modalMovie.innerHTML = movieDetail
}




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