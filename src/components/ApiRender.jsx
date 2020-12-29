import React, { useState } from 'react'
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
  border: 1px solid black;
  margin: 5px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align:center;
`

const Digimons = ({ digimons }) => {
  
  const[init,setInit] = useState(0)
  let end = init + 1
  return (

    <StyledContainer>
    
      {digimons.slice(init,end).map((digimon) => (
        <div>
          <StyledCard>
            <h1>{digimon.name}</h1>
            <img src = {digimon.img} alt =''></img>
            <p>{digimon.level}</p>
          </StyledCard>
          </div>
          
      ))}
        <button onClick={() => setInit(init - 1)}>
          prev.
        </button>
        <button onClick={() => setInit(init + 1)}>
          next!
        </button>
    </StyledContainer>
  )
};

export default Digimons