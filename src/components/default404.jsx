import React from 'react'
import img404 from '../images/404img.png'
import styled from 'styled-components'
import { StyledContainer } from '../resources/DefaultStyles'

const Styled404container = styled(StyledContainer)`
    
     
    & div img {
        max-height: 300px;
        justify-content: center;
        align-items: center;
    }
    & div h1{
        width: 100vw;
        margin: unset;
        text-align:center;
    }
`

const Ops404 = () => {

    return (
        <Styled404container>
            <div>
                <img src={img404} alt="404"/>
            </div>
            <div>

            <h2>ops! page not found!</h2>
            </div>

        </Styled404container>
    )
}


export default Ops404