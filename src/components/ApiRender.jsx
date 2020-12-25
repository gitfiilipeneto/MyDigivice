import React from 'react'

const Digimons = ({ digimons }) => {
  return (
    <div>
      
      {digimons.map((digimon) => (
        <div>
          <div>
            <h5>{digimon.name}</h5>
            <img src = {digimon.img}></img>
            <p>{digimon.level}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Digimons