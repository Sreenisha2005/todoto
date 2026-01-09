import fb from "./assets/icons/fb.svg";
import ig from "./assets/icons/ig.svg";
import ln from "./assets/icons/ln.svg";
import './App.css';
import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h1>todoto</h1>
                <div className="details-container">
                    <div className="socials">
                        <img src={fb} alt="fb" />
                        <img src={ig} alt="ig" />
                        <img src={ln} alt="ln" />
                    </div>
                    <div className="links">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                    </div>
                    <h3>Contact Me</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;