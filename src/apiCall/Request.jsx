import React,{ Components}  from 'react'


class Requisicao extends Components {    
        state = {
            digimons: []
        }

        ComponentDidMount(){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then((data) =>{
            this.setState({digimons : data})
        })
        
    }
}

export default Requisicao