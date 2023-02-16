import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-all'>
    <div className='home-content'>
        
       <div className='home-screen'>
        <Link to={'/regions'} className='link'>
            <button className='home-card'>Region List</button>
        </Link>
        
        <Link to={'/plantlist'} className='link'>
            <button className='home-card'>Plant List</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Home