import React from 'react'
import { Link } from 'react-router-dom'
const Plant = (props) => {
  return (
    <Link to={`/plants/${props.id}`} className='link'>
    <div className='plant-card'>
      <h3> {props.commonName}</h3>
      
     <div className='img-container'>
     <img src={props.img} alt={props.commonName}></img>
      </div>
      <p>({props.scientificName})</p>
    </div>
    </Link>
  )
}

export default Plant