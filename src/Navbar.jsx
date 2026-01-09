import { Link } from "react-router-dom";
import "./App.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h2>todoto</h2>
            <div className="navbar-div">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <button className="primary-button">
                Tasks
            </button>
        </nav>
    );
}

export default Navbar;