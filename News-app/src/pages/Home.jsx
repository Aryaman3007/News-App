import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import BackToTop from '../components/BackToTop'

function Home() {
  return (
    <>
    <Navbar/>    
    <News/>
    <BackToTop/>
    <Footer/>
    </>
  )
}

export default Home