import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">
       <img src={Logo} alt="App Logo" />
      </Link>
     
      <h1>CanCook</h1>
    </nav>
  )
}

export default Navbar
