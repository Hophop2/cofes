import React from 'react'
import '../styles/aboutStyle.css'
import about from '../img/bar.jpg'
import AnimatedDiv from '../AnimatedDiv'

const AboutUs = () => {
  return (
    <div className='aboutus-container' id='about'>
      <div className='img-box'>
      <img src={about} alt="about" className='aboutimg' />
      </div>
      
      <div className='about-box'>
      <AnimatedDiv>
        <div className='about-wrapper'>
          
        <h2>About Us</h2>
        
        </div>
        
        <div className='textbox'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br /><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
            <br /><button className='learn'>Learn more</button></div>
            </AnimatedDiv>
        
        
      </div>
    </div>
  )
}

export default AboutUs