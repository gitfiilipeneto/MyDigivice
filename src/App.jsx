import React, { Component } from 'react'
import Digimons from './components/ApiRender'

class App extends Component{
    state = {
        digimons:[{name:'loading'}]
    }
    componentDidMount(){
        fetch('https://digimon-api.vercel.app/api/digimon/')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            this.setState({digimons:data})
        })
        }
        render(){
            let start = 0;
            let end = start + 1
            
            return(
                
                <Digimons digimons={this.state.digimons.slice(start,end)}/>
            )
        }
    }


export default App