import About from "./About.jsx";
import Howitworks from "./Howitworks.jsx";
import Footer from "./Footer.jsx";
import HeroSection from "./HeroSection.jsx";
import React from 'react';
import {Route} from "react-router-dom";

function LandingPage() {
    return (
        <>
            <HeroSection />
            <Howitworks />
            <About />
            <Footer />
        </>
    );
}

export default LandingPage;