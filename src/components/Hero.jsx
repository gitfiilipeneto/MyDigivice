import {useEffect, useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import GetDigimons from '../apiCall/ApiCall'

const StyledContainer = styled.div`
width:100vw;
height:100vh;
max-width:100%;
display:flex;
justify-content: center;
align-items: center;
`

const styledH1 = styled.h1`
font-size: 96px;
`

const HeroSection = () => {
    const [list,setList] = useState([])
    useEffect(() => {
        let mounted = true;
        GetDigimons()
        .then( items => {if (mounted){
            setList(items)
        }
    })
    return () => mounted = false
},[])
return(
    <div>
        <ul>
            {list.map(digimon => <li key = {digimon.name}>{digimon.name}</li>)}
        </ul>
    </div>
)
}
 

export default HeroSection