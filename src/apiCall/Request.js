// listarPokemons = () => {
//     return fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//     return response.json()
//     })
//     .then(json =>{
//     return json
//     })
// }

import React, { Component } from 'react'

class ApiCall extends Component {
    ...
    componentDidMount(){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())

    }
}