import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header>
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/glossery'}>Glossary</Link>
    </nav>
    </header>
  )
}

export default Nav