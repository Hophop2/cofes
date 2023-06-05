import React, { useState } from 'react'
import '../styles/headerStyle.css'
import logo from '../img/primo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark  } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-scroll'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };
  return (
    <>
    <div className={`nav-cont ${isOpen ? 'open' : ''}`}>
      
      <nav className="menu-nav" >
        <div className='logo-mobile'>
        <Link  to='pr' spy={true} smooth={true} offset={-100} duration={500}><img src={logo} alt="Logo" onClick={handleToggleMenu} className='mobile'/></Link>
        </div>
      
        <div className='toggle'><FontAwesomeIcon onClick={handleToggleMenu}  icon={faXmark} /></div>
      
        <ul className='ul-mobile'>
          <li className='navli'><Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={handleToggleMenu}>About Us</Link></li>
          <li className='navli'><Link to='menu' spy={true} smooth={true} offset={-100} duration={500} onClick={handleToggleMenu}>Menu</Link></li>
          <li className='navli'><Link to='blog' spy={true} smooth={true} offset={-100} duration={500} onClick={handleToggleMenu}>Blog</Link></li>
          <li className='navli'><Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={handleToggleMenu}>Contact</Link></li>
        </ul>
        <div className='icons mob'>
        <FontAwesomeIcon icon={faFacebook} size="2xl" />
        <FontAwesomeIcon icon={faInstagram}  size="2xl"/>
        </div>
      </nav>
    </div>



    <div className='navbar-container' >
        <div className='navbar-wrapper'>
            <div className='box'>
            <ul className='nav-ul'>
            <li className='navli'><Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li className='navli'><Link to='menu' spy={true} smooth={true} offset={-100} duration={500}>Menu</Link></li>
          <li className='navli'><Link to='blog' spy={true} smooth={true} offset={-100} duration={500}>Blog</Link></li>
          <li className='navli'><Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
            </ul>
            </div>
            <div className='logob'>
            <Link to='pr' spy={true} smooth={true} offset={-100} duration={500}>
        <img src={logo} alt="Logo" className='logoimg'/>
        </Link>
        </div>
        
        <div className='sociale'>
        <FontAwesomeIcon className='navli' icon={faFacebook} size="2xl" />
        <FontAwesomeIcon className='navli' icon={faInstagram}  size="2xl"/>
        </div>
        <div className='logo'>
 <FontAwesomeIcon onClick={handleToggleMenu} icon={faBars} beat style={{color: "white",}}/>
        </div>
        
        </div>
    </div>
    </>
    
  )
}

export default NavBar