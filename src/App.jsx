import React, { useEffect } from "react";
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 3000, });
  }, [])
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      
    </div>

  )
}

export default App

