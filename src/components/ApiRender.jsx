import React, {Component} from 'react'
import styled from 'styled-components'
import api from '../apiCall/Request.js'
import { render } from 'react-dom'

class Pokenames extends Component{
    state = {
        pokenames: []
    }
};

async function ComponentDidMount(){
    const response = await (api.get('results'))
    this.setState({pokenames: response.data})
};

const Pokenames = () => { 
    const { pokenames } = this.state;

        return(
            <div>
                <h1>listar pokemonsters</h1>
                {pokenames.map(pokenames =>(
                <li key = {pokenames.name}></li>
                ))}
            </div>
        )
    }
}    
export default Pokenames