import React, { useState, useEffect } from 'react'
import GetDigimons from '../apiCall/ApiCall'
import { StyledButton, StyledCard, StyledContainer, StyledImg } from '../resources/DefaultStyles'


const HeroSection = () => {

    const [digimons, setDigimons] = useState([])
    
    useEffect(() => {
        GetDigimons()
        .then(allDigimonsArray => { setDigimons(allDigimonsArray) })
    }, [])


    const [init, setInit] = useState(0)

    let end = init + 1

    if (init === -1, end === 0) {
        return setInit(init + 1)

    }else{

        return (
            <StyledContainer>

                {digimons.slice(init, end).map((digimon) => (
                    <div>

                        <StyledCard>
                            <h1>{digimon.name}</h1>
                            <StyledImg src={digimon.img} alt={digimon.name}></StyledImg>
                            <p>{digimon.level}</p>
                        </StyledCard>
                    </div>

                ))}
                <div>
                    <StyledButton onClick={() => setInit(init - 1)}>
                        prev
                    </StyledButton>
                    <StyledButton onClick={() => setInit(init + 1)}>
                        next
                    </StyledButton>
                </div>

            </StyledContainer>
        )
    }
}


export default HeroSection