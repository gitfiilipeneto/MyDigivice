import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100vw; 
  max-width: 100%;
  height: 100vh;
  /* height: ; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledCard = styled.div`
  border-bottom: 1px solid black;
  margin: 5px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
`
export const StyledImg = styled.img`
  max-height: 300px;

  @media(max-width: 800px) {
    max-height: 250px;
  }
`

export const StyledButton = styled.button`
  margin: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #f44336;
  border: none;
  text-align: center;
  padding: 10px 25px;
  color: white;
  font-size:20px;
`

