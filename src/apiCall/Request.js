// listarPokemons = () => {
//     return fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//     return response.json()
//     })
//     .then(json =>{
//     return json
//     })
// }
// call usando fetch

import axios from 'axios'

const api = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})

export default api