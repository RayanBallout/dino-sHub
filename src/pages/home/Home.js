import React from 'react'
import HomeHero from '../../components/homeHero/HomeHero'
import Location from '../../components/location/Location'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeHero />
      <Location />
    </>
    
  )
}

export default Home