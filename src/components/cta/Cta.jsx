import React from 'react'
import './Cta.css'
import { Slide } from 'react-reveal'

const Cta = () => {
  return (
    <div className='gpt3__cta '>
      <Slide left>
      <div className='gpt3__cta_content'>
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possiblities.</h4>
      </div>
      <button type='button'>Get Started</button>
      </Slide>
    </div>
  )
}

export default Cta