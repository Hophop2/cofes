import React from 'react'
import '../styles/addStyle.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedDiv from '../AnimatedDiv'
const Addictional = () => {
  return (
    <div className='add-container' id='blog' >
      <div className='h-container'>
      <AnimatedDiv>
        <h2 className='disc'>DISCOVER</h2>
        </AnimatedDiv>
      </div>
      <div className='wrapper'>
        <div className='artlate'>
        <AnimatedDiv>
          <h3>Art Late Invidual Training</h3>
          </AnimatedDiv>
          <button className='btn'><p>Discover</p><FontAwesomeIcon icon={faArrowRight} beatFade size="s" /></button>
        </div>
        <div className='coffe-origin'>
        <AnimatedDiv>
        <h3>Coffe Origin</h3>
        </AnimatedDiv>
          <button className='btn'><p>Discover</p><FontAwesomeIcon icon={faArrowRight} beatFade size="s" /></button>
        </div>
      </div>
    </div>
  )
}

export default Addictional