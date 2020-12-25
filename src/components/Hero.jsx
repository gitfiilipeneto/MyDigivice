import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
width:100vw;
height:100vh;
max-widht:100%;
display:flex;
justify-content: center;
align-items: center;
`

const styledH1 = styled.h1`
font-size: 96px;

`
const HeroSection = () => {
    return(
        <StyledContainer>
            <ul>
                <li>pokemon name:</li>
            </ul>
            <styledH1>Oi</styledH1>
        </StyledContainer>
    )
}

export default HeroSection