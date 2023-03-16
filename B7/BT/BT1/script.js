const pokeName = document.querySelector('#pokeName')
const pokeDetail = document.querySelector('#pokeDetail')
let poke = []
function getPokeList() {
    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(function (response) {
            poke = response.data.results
            pokeName.innerHTML = poke.map(function (Poke) {
                return `<li>${Poke.name.toUpperCase()}</li>`
            }).join('')
        })
}
function getPokeDetail(URL, pokeDetail) {
    axios
        .get(URL)
        .then(function (response) {
            const name = response.data.name
            const types = response.data.types.map(function (type) {
                return type.type.name.toUpperCase()
            }).join('                 ')
            const sprites = response.data.sprites.front_shiny
            pokeDetail.innerHTML = `
                <img src='${sprites}'>
                <p>${types}</p>
            `
        })
}
pokeName.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const URL = `https://pokeapi.co/api/v2/pokemon/${event.target.innerText.toLowerCase()}`
        getPokeDetail(URL, pokeDetail)
    }
})
getPokeList()