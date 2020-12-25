import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StyledCard = styled.div`
  border-top: 2px solid black;
  margin: 5px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align:center;
`

const Digimons = ({ digimons }) => {
  return (
    <StyledContainer>      
      {digimons.map((digimon) => (
        <div>
          <StyledCard>
            <h1>{digimon.name}</h1>
            <img src = {digimon.img}></img>
            <p>{digimon.level}</p>
          </StyledCard>
        </div>
      ))}
    </StyledContainer>
  )
};

export default Digimons