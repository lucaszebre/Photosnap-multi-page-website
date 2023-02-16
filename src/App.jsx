import Nav from './components/nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Stories from './components/stories'
import Features from './components/features'
import Pricing from './components/Pricing'
import { useRef } from 'react'
import { HashRouter, Routes, Route,BrowserRouter } from 'react-router-dom';
import './App.css'
import  ScrollToTop  from './components/ScrollToTop';
function App() {

  
  

  return (
    <>
    
      <HashRouter basename='/'>
        <ScrollToTop />
        <Nav /> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        </Routes>
      <Footer />
  </HashRouter>

    </>
  )
}

export default App
