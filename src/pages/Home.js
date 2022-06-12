import React from 'react'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import Summary from '../components/Summary'

function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Summary />
      <Portfolio />
      <Contacts />
    </div>
  )
}

export default Home