import axios from "axios";
const getData = async () => {
    try {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')
        for (let i = 0; i < pokemon.data.results.length; i++) {
            console.log('Name Pokemon: ' + pokemon.data.results[i].name)
            const url = pokemon.data.results[i].url
            const pokemonDetail = (await axios.get(url)).data.types
            let typePokemon = []
            for (let j = 0; j < pokemonDetail.length; j++) {
                typePokemon.push(pokemonDetail[j].type.name)
            }
            console.log('Type Pokemon: ' + typePokemon.join(', ') + '\n')
        }
    } catch (error) {
        console.log(error)
    }
}
getData()