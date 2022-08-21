import React from 'react'
import './HomeHero.css'
import {Link} from 'react-router-dom'

const HomeHero = () => {
  return (
    <div className='background-image'>
        <div className="overlay"></div>
        <div className="text-container container">
            <h2>Join The DINO'S Family</h2>
            <div className="cta">
                <Link to='/about' className='link'>About Us</Link>
                <Link to='/menu' className='link menu'>Our Menu</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeHero