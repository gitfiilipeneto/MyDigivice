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

            return(
                <Digimons digimons={this.state.digimons}/>
                
            )

        }
    }


export default App