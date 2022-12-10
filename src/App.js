import React from 'react'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App