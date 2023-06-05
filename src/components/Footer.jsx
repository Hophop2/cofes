import React from 'react'
import '../styles/footerStyle.css'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedDiv from '../AnimatedDiv'
const Footer = () => {
  return (
    <footer id='contact'>
      
      <div className='footer-lside'>
        
      <div className='news'>
      <AnimatedDiv>
        <h4>Newsletter</h4>
        </AnimatedDiv>
        <form class="form">
			<input type="email"  placeholder="Your E-Mail Address" />
			<input type="submit"  name='' value='Search' />
			
		</form>
      </div>
      <AnimatedDiv>
      <ul className='foot'>
        <li className='navli'>Primo</li>
        <li className='navli'>About Us</li>
        <li className='navli'>Menu</li>
        <li className='navli'>Blog</li>
      </ul>
      </AnimatedDiv>
      
      </div>
     
      <div className='footer-rside'>
      <AnimatedDiv>
        <p>46722 Flatley Haven,<p> Suite 873, 97296, Betsyfort,</p><p> Hawaii, United States</p></p>
        </AnimatedDiv>
        <AnimatedDiv>
        <div className='icons'>
        
        <FontAwesomeIcon className='navli' icon={faFacebook} size="2xl" />
        <FontAwesomeIcon className='navli' icon={faInstagram}  size="2xl"/>
        
        </div>
        </AnimatedDiv>
      </div>
    </footer>
  )
}

export default Footer