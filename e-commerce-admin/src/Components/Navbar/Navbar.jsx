import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import navlogo from '../Assets/nav-logo.jpeg'
import navprofileIcon from '../Assets/nav-profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><img src={navlogo} style={{width:"40px"}} className='nav-logo' alt="" /></Link>
      <img src={navprofileIcon} style={{width:"40px", borderRadius:"20px"}} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
