import React, { Component } from 'react'
import Digimons from './components/ApiRender'

class App extends Component{
    state = {
        digimons:[]
    }
    componentDidMount(){
        fetch('https://digimon-api.vercel.app/api/digimon/')
        .then(response => response.json())
        .then((data) => {
            this.setState({digimons:data})
        })
        }
        render(){
            return(
                <Digimons digimons={this.state.digimons}/>
            )
        }
    }


export default App