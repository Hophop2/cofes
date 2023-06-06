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
        
      <div className='about-wrapper'>
      <AnimatedDiv>
          <h2>About Us</h2>
          </AnimatedDiv>
          </div>
     
        
        
        <div className='textbox'>
        <AnimatedDiv>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br /><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
            <br /></AnimatedDiv><button className='learn'>Learn more</button><br />
            
            
            </div>
            
        
        
      </div>
      
      
    </div>
  )
}

export default AboutUs