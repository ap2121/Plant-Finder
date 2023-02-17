import React from 'react'
import { Link } from 'react-router-dom'
const Region = (props) => {
  return (
    <Link to={`/regions/${props.r_id}`} className='link'>
    <div className='region-list'>
      <h1>{props.name}</h1>
      
      <img src={props.rImg}/>
      
    </div>
    </Link>
  )
}

export default Region