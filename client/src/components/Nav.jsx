import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header>
    <div className='nav-container'>
    <nav>
        <Link to={'/'} className='nav-item'>Home</Link>
        <Link to={'/mygarden'} className='nav-item'>My Garden</Link>
        <Link to={'/regions'} className='nav-item'>Regions</Link>
        <Link to={'/plantlist'} className='nav-item'>All Plants</Link>
        <Link to={'/addplant'} className='nav-item'>Add New Plant</Link>
        <Link to={'/glossary'} className='nav-item'>Glossary</Link>
        
    </nav>
    </div>
    </header>
  )
}

export default Nav