import React from 'react'
import './blog.css'
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import';
import { Slide } from 'react-reveal';


const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <Slide left>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,<br/>We are blogging about it.</h1>
      </div>
      </Slide>
      <div className='gpt3__blog-container'>
        <Slide bottom>
        <div className='gpt3__blog-container__groupe-A'>
          <Article imageUrl={blog01} date='jun 10, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        </Slide>
        <div className='gpt3__blog-container__groupe-B'>
        <Slide bottom><Article imageUrl={blog02} date='Sep 26, 2021' title='How ChatGPT and Our Language Models Are Developed'/></Slide>
        <Slide bottom><Article imageUrl={blog03} date='Nov 14, 2021' title='Does OpenAI offer Multi-factor authentication (MFA)?'/></Slide>
        <Slide bottom><Article imageUrl={blog04} date='apr 05, 2022' title='How do I use the OpenAI API in different languages?'/></Slide>
        <Slide bottom><Article imageUrl={blog05} date='jun 18, 2022' title='Terms of Use'/></Slide>
        </div>
      </div>
    </div>
  )
}

export default Blog