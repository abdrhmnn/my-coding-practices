// menerapkan error handling para latihan fetch sebelumnya


const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword')
        const movies = await getMovies(inputKeyword.value)
        console.log(movies);
        updateUI(movies)
    }catch(err){
        console.log(err);
    }
})


// method fetch hanya akan mengembalikan sebuah ERROR ketika network (url / resouce) nya ERROR
// jika terdapat error selain dari network maka itu dikembalikan oleh browser

// untuk menangkan error yg tidak dihasilkan dari network maka kita hrs tangani secara manual didalam
// response nya


function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=dbd155ce&s=one piece' + keyword)
        .then(response => {
            if(response.ok === false){

                // bikin sebuah error dan lempar kedalam catch nya
                throw new Error(response.statusText) // statusText === Unauthorized
            }

            return response.json()
        })
        .then(response => {

            // Response yg ini merupakan property yg dibuat oleh omdbnya sehingga kita bisa manfaatkan
            if(response.Response === "False"){
                throw new Error(response.Error) // dan lemparkan property Error ke catch nya
            }

            return response.Search
        })
}


function updateUI(movies){
    let cards = ''
    movies.forEach(movie => cards += showCards(movie))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
}





document.addEventListener('click', async function(element){
    if(element.target.classList.contains('.modal-detail-button')){
        const imdbid = element.target.dataset.imdbid
        const movieDetail = await getMovieDetail(imdbid)
        updateUIDetail(movieDetail)
    }
})


function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=dbd155ce&i=' + imdbid)
        .then(response => response.json())
        .then(response => { response })
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