import React from 'react'
import { Link } from 'react-router-dom'
const Plant = (props) => {
  return (
    <Link to={`/plants/${props.id}`} className='link'>
    <div className='plant-card'>
      <h3> {props.commonName}</h3>
      <p>({props.scientificName})</p>
     
      
      <h4>IMG GOES HERE</h4>
      
    </div>
    </Link>
  )
}

export default Plant