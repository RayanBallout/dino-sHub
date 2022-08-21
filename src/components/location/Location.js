import React from 'react'
import './Location.css'
import map from '../../assets/images/map.png';

const Location = () => {
  return (
    <div className='location-container'>
        <div className="container">
            <h2>Where can you find us?</h2>
            <div className="location-content">
                <img src={map} alt="Map" className='map' />
                <div className="text-content">
                    <p>
                        We are located in the town of Hammana, Lebanon, in the heart of good weather and better vibes. Join
                        us for an extraordinary time and music. We are waiting for you!!
                    </p>
                    <a href='https://goo.gl/maps/92YZ13cKwiX5pdBM7' target='_blank' >Get Directions</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location