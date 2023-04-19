const moviesDiv = document.querySelector('#movies')
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
let movies = []
function getMovies() {
    axios
        .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6c96099fa68315c765fdeb8a6c1ff101')
        .then(function (response) {
            movies = response.data.results
            render()
        })
}
function render() {
    const moviesElement = movies.map(function (movie) {
        return `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${IMG_URL + movie.poster_path}" class="img-fluid" >
        </div>
        `
    })
    moviesDiv.innerHTML = moviesElement.join('')
}
getMovies()