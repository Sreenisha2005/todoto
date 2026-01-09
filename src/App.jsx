import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import About from "./About.jsx";

function App() {
  return(
      <BrowserRouter>
          <HeroSection />
          <About />
          <Routes>
              <Route path="/" element={<div />} />
              <Route path="/about" element={<div />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
