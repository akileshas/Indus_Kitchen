import React from 'react'
import Navbar from './Components/navbar/navbar'
import Home from './Components/home/home'
import About from './Components/about/about'
import News from './Components/news/news'
import Footer from './Components/footer/footer'
import SmallScreen from './Components/small-screen/small-screen'
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <About />

        <News />
        <Footer />
        <SmallScreen />
      </div>
    </>
  )
}

export default App
