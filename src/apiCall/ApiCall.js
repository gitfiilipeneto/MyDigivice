const GetDigimons = () => {
    return fetch('https://digimon-api.vercel.app/api/digimon/')
    .then(resp => resp.json())
    .then(respAsJson => Object.values(respAsJson))
}

export default GetDigimons

