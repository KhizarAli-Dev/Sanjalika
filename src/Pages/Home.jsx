import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Slider from '../Components/Slider'
import MiddleSections from '../Components/Sections/MiddleSection'
import Footer from '../Components/Layouts/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <Slider />
    <MiddleSections/>
    <Footer/>
    </>
  )
}

export default Home