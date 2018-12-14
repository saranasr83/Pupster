import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => (
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
                            window.location.pathname === "/about"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link className="nav-link" to="/">
                        About
                    </Link>

                </li>
                {/* <li
                    className={
                        window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"
                    }
                >
                    <Link className="nav-link safety-tips" to="/.safety">
                        Safety Tips
                    </Link>
                </li> */}
                <li className={
                    window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"
                }>
                    <a href="/#safety">
                        Safety Tips
                    </a>
                </li>
                <li
                    className={
                        window.location.pathname === "/discover"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link className="nav-link" to="/discover">
                        Discover
                    </Link>

                </li>
                <li
                    className={
                        window.location.pathname === "/search"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link className="nav-link" to="/search">
                        Search
                    </Link>
                </li>

            </ul>
        </div>
    </nav>
);

export default Navbar;