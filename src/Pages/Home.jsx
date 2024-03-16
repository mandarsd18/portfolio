import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
   <>
   <Navbar/>
   <Herosection/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home