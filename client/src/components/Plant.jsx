import React from 'react'

const Plant = (props) => {
  return (
    <div className='plant-card'>
      <h3> {props.commonName}</h3>
      <p>({props.scientificName})</p>
      <p>Water: {props.water}</p>
      <p>Sun Exposure: {props.sunExposure}</p>
      <p>Mature Size: {props.matureSize} inches</p>
      <p>Soil Type: {props.soilType}</p>
      <p>Soil PH Average: {props.soilPHAvg}</p>
      <p>Hardiness Zone: {props.hardinessZone}</p>
      
    </div>
  )
}

export default Plant