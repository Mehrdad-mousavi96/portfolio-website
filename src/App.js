import React from 'react'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Work from './Components/Work'

const App = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  )
}

export default App