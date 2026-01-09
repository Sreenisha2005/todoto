import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import About from "./About.jsx";
import Howitworks from "./Howitworks.jsx";
import Footer from "./Footer.jsx";

function App() {
  return(
      <BrowserRouter>
          <HeroSection />
          <Howitworks />
          <About />
          <Footer />
          <Routes>
              <Route path="/" element={<div />} />
              <Route path="/about" element={<div />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
