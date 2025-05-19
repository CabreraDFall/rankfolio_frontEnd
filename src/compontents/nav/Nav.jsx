import React from 'react'
import Logo from '../logo/logo';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';
import "./nav.css"


function Nav() {
  return (
     <nav>
        <Logo/>
        <Link to="/profile"><Profile/></Link>
      </nav>
  )
}

export default Nav
