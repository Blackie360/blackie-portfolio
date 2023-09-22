import React from 'react'
import { About, Skills, Testimonials, Work, Header, Footer, Experiences } from './container'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='app pt-4'>
      <Navbar />
      <Header  />
      <About />
      <Work />
      <Skills />
      <Experiences />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App