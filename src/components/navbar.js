// src/Navbar.js
import React from 'react';
import logo from '../images/habot-logo.jpg'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo} // Replace with your emblem URL or path
                        alt="Emblem"
                        width="90"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {/* Additional navbar items can go here */}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownServices"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Find Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                                <li>
                                    <Link className="dropdown-item" to="/service1">Service 1</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/service2">Service 2</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownResources"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Find Resources
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownResources">
                                <li>
                                    <Link className="dropdown-item" to="/resource1">Resource 1</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/resource2">Resource 2</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Link className="btn btn-outline-success" to="/login" style={{ marginLeft: '10px' }}>
                        Login / Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
