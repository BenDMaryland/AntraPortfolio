import React from 'react'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'

function Home() {
  return (
    <div>Home
    <Intro/>
    <AboutMe/>
    <Portfolio/>
    <Contacts/>
      </div>
  )
}

export default Home