import React from 'react'
import logo from 'C:/Users/GRIET/Desktop/portfolio/src/assets/logo-png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import './navbar.css'
const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
      
        <img className='logo' src={logo}  alt='logo'></img>
        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>
          <li>
            <a className='menu-item'>Skills</a>
          </li>
          <li>
            <a className='menu-item'>Work Experience</a>
          </li>
          <li>
            <a className='menu-item'>Contact Me</a>
          </li>
          <button className='contact-me' onClick={()=>{}}>Hire Me</button>
        </ul>
        <button className='menu-btn' onClick={() => {}}>
  <span><FontAwesomeIcon icon={faBars} /></span>
</button>
        

      </div>
    </nav>
  )
}

export default Navbar