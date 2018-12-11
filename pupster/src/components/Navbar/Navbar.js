import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = props => (
    // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Pupster
        </Link>
        <div>
            <ul className="navbar-nav">
                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/About"
                            ? "nav-item active"
                            : "nav-item"}
                >
                    <Link className="nav-link" to="/">
                        About
                    </Link>

                </li>
                <li
                    className={
                        window.location.pathname === "/SafetyTips"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link className="nav-link" to="/About">
                        Safety Tips
                    </Link>
                </li>
                <li
                    className={
                        window.location.pathname === "/Discover"
                            ? "nav-item active"
                            : "nav-item"}
                >
                    <Link className="nav-link" to="/Discover">
                        Discover
                    </Link>

                </li>
                <li
                    className={
                        window.location.pathname === "/Serach"
                            ? "nav-item active"
                            : "nav-item"}
                >
                    <Link className="nav-link" to="/Search">
                        Search
                    </Link>
                </li>

            </ul>
        </div>
    </nav>
);

export default Navbar;