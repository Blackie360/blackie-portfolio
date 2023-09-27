import React from 'react'
import { About, Skills, Work, Header, Footer, Contact} from './container'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='app pt-4' >
      <Navbar />
      <Header  />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App