import "./App.css";
import Navbar from "./Navbar";
import go from "./assets/icons/go.svg";

function HeroSection(){
    return (
        <section className="hero">
            <Navbar />
            <div className="container w-1/2">
                <h1 className="text">Stay Organized. Stay Focused.</h1>
                <p className="text">A simple and intuitive task manager built with React to help you plan your day, track progress, and get things done efficiently.</p>
                <div className="ctas">
                    <div className="button-1">
                        <button className="btn-in-1">
                            Get Started
                        </button>
                    </div>
                    <div className="button-2">
                        <button className="btn-in-2">
                            <span>Go to tasks</span>
                            <img src={go} alt="go" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection;