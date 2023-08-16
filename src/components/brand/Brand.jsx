import React from 'react'
import { google,shopify,dropbox,atlassian,slack } from './import'
import './Brand.css'
import { Slide } from 'react-reveal'

const Brand = () => {
  return (
      <div className='gpt3__brand section__padding'>
        <div>
          <Slide left>
            <a href='https://about.google'><img src={google} alt='google'/></a>
          </Slide>
        </div>
        <div>
        <Slide left>
          <a href='https://slack.com/intl/fr-tn/'>
          <img src={slack} alt='slack'/>
          </a>
        </Slide>
        </div>
        <div>
        <Slide left>
        <a href='https://www.atlassian.com'>
        <img src={atlassian} alt='atlassian'/>
        </a>
        </Slide>
          
        </div>
        <div>
        <Slide left>
        <a href='https://www.dropbox.com/official-teams-page'>
        <img src={dropbox} alt='dropbox'/>
        </a>
        </Slide>
          
        </div>
        <div>
        <Slide left>
        <a href='https://www.shopify.com/free-trial'>
        <img src={shopify} alt='shopify'/>
        </a>
        </Slide>
        </div>
    </div>
  )
}

export default Brand