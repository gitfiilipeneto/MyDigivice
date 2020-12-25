import React from 'react'

const Digimons = ({ digimons }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {digimons.map((digimon) => (
        <div >
          <div>
            <h5>{digimon.name}</h5>
            <h6>{digimon.img}</h6>
            <p>{digimon.level}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Digimons