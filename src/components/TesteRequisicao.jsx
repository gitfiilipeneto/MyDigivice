
const ApiCall = () => {
    return fetch('https://digimon-api.vercel.app/api/digimon/')
    .then( resp => { 
    
        return resp.json()
    })
}

export default ApiCall