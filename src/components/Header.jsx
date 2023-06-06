import React from 'react'
import '../styles/headerStyle.css'
import NavBar from './NavBar'
import AnimatedDiv from '../AnimatedDiv'
import BlurAnimation from '../animations/BlurAnimation'
const Header = () => {
  return (
    <div>
    
    <div className='header-container' id='pr'>
    <NavBar />

    <AnimatedDiv>
      <div className='h-box'>
        <h1 >DISCOVER THE TASTE OF COFFES WITH PRIMO</h1>
        </div>
      
        </AnimatedDiv>
    </div>
    </div>
  )
}

export default Header