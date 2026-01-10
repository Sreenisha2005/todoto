import go_bl from "./assets/icons/go_bl.svg"
import { Link, useNavigate } from "react-router-dom";
import "./App.css"

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <h2>todoto</h2>
            <div className="navbar-div">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <button className="primary-button"
            onClick={() => navigate("/todos")}>
                Tasks
                <img src={go_bl} alt="go_bl"/>
            </button>
        </nav>
    );
}

export default Navbar;