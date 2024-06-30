import React from 'react'
import"../index.css"
import {Link} from "react-router-dom"
import Home from './home'


const hero = (props) => {
  const heroImage=props.heroImage;
  return (
    
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={heroImage} alt='introimg'/>

        </div>
        <div className='content'>
            <p>HI,I AM A </p>
            <h1>WEB DEVELOPER</h1>
            <div>
                <Link to="/project"  className='btn'>PROJECTS</Link>
                <Link to="/contact"  className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
        


      
    </div>
  )
}

export default hero
