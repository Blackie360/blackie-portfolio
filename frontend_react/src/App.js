import React from 'react'
import { About, Plan, Testimonials, Work, Header, Footer } from './container'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='app pt-4'>
      <Navbar />
      <Header  />
      <About />
      <Work />
      <Plan />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App