import React from 'react'
import { About, Skills, Testimonials, Work, Header, Footer } from './container'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App