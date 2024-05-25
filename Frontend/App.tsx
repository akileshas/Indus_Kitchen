import React, { useState, useEffect } from 'react';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';
import About from './Components/about/about';
import Choose from './Components/choose/choose';
import Story from './Components/story/story';
import Menu from './Components/menu/menu';
import Testimonial from './Components/testimonial/testimonial';
import Form from './Components/form/form';
import Contact from './Components/contact/contact';
import Achievements from './Components/achievement/achievement';
import News from './Components/news/news';
import Footer from './Components/footer/footer';
import SmallScreen from './Components/small-screen/small-screen';
import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 130) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 130) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Choose />
        <Menu />
        <Story />
        <Testimonial />
        <Form />
        <Contact />
        <Achievements />
        <News />
        <Footer />
        <SmallScreen />
      </div>
      <button
        id="ScrollToTopBtn"
        className={showScroll ? 'show' : ''}
        onClick={scrollToTop}
        title="Go to top"
      >
        <i className='bx bxs-chevron-up'></i>
      </button>
    </>
  );
}

export default App;