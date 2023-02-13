import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-screen'>
        <Link to={'/regions'} className='link'>
            <h3 className='home-card' id='home-regions'>Regions Card</h3>
        </Link>
        <Link to={'/plantlist'} className='link'>
            <h3 className='home-card' id='home-plants'>Plants Card</h3>
        </Link>
    </div>
  )
}

export default Home