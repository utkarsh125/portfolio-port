"use client"

// import { CrosshairCursor } from './components/CrosshairCursor'
import Hero from './components/Hero'
import Projects from './components/Projects'
// import Projects from './components/Projects'
import React from 'react'
import Skills from './components/Skills'
// import RubberBand from './components/RubberBand'

const page = () => {
  return (
    <div>
      {/* <CrosshairCursor /> */}
      <Hero />
      {/* <RubberBand /> */}
      <Projects />
      <Skills />
    </div>
  )
}

export default page