// cth penggunaan jquery
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dbd155ce&s=one piece',
    success: result => {
        // console.log(result);
        const movies = result.Search; // Search itu merupakan pembungkus dari array of object nya
        let cards = ''
        movies.forEach(movie =>{
            cards += showCards(movie);
        })
        $('.movie-container').html(cards) // jadi ini maksudnya "jquery tolong carikan saya element 
        // yg memiliki class movie-container dan isi html nya ganti dgn cards"

        // ketika tombol detail di klik
        // $('.modalDetailButton').on('click', function(){
        //     $.ajax({
        //         url: 'http://www.omdbapi.com/?apikey=dbd155ce&i=' + $(this).data('imdb'),
        //         success: result => {
        //             const movieDetail = `ini merupakan html fragments yg akan disimpan didalam class
        //             modal-body`;

        //             $('.modal-body').html(movieDetail)
        //         },
        //         error: (e) => {
        //             console.log(e.responseText);
        //         }
        //     })
        // })
    },
    error: (e) => {
        // jika error atau data tidak muncul
        console.log(e.responseText);
    }
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