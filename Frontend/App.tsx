import React from 'react';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';
import About from './Components/about/about';

import Testimonial from './Components/testimonial/testimonial';
import Form from './Components/form/form';
import Contact from './Components/contact/contact';
import Achievements from './Components/achievement/achievement';
import News from './Components/news/news';
import Footer from './Components/footer/footer';
import SmallScreen from './Components/small-screen/small-screen';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <About />

        <Testimonial />
        <Form />
        <Contact />
        <Achievements />
        <News />
        <Footer />
        <SmallScreen />
      </div>
    </>
  )
};

export default App;
