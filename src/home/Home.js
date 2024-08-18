import React from 'react'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'
import Header from './Header'
import Banner from './Banner'
import Section from './Section'
import Category from './Category'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Section />
      <Category />

      <Footer />
    </div>
  )
}

export default Home
