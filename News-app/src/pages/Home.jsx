import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'

function Home() {
  return (
    <>
    <Navbar/>    
    <News/>
    <Footer/>
    </>
  )
}

export default Home