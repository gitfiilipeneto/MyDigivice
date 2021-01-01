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
  border-bottom: 1px solid black;
  margin: 5px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align:center;
`
const StyledImg = styled.img`
  max-height: 300px;
`

const StyledButton = styled.button`
  margin: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #f44336;
  border: none;
  text-align: center;
  padding: 10px 25px;
  color: white;
  font-size:20px;

`

const Digimons = ({ digimons }) => {
  
  const[init,setInit] = useState(0)

  let end = init + 1

  if(init === -1, end === 0){
    return setInit(init + 1)
    
  }else{
  
  return (
    
 

    <StyledContainer>
    
      {digimons.slice(init,end).map((digimon) => (
        <div>
         
          <StyledCard>
            <h1>{digimon.name}</h1>
            <StyledImg src = {digimon.img} alt =''></StyledImg>
            <p>{digimon.level}</p>
          </StyledCard>
          </div>
                    
      ))}
      <div>
        <StyledButton  onClick={() => setInit(init - 1)}>
          prev
        </StyledButton>
        <StyledButton onClick={() => setInit(init + 1)}>
          next
        </StyledButton>
      </div>

    </StyledContainer>
  )
}
};

export default Digimons