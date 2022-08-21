import React from 'react'
import { Helmet } from 'react-helmet'
import AboutHero from '../../components/aboutHero/AboutHero'
import OpeningHours from '../../components/openingHours/OpeningHours'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutHero />
      <OpeningHours />
    </>
    
  )
}

export default About