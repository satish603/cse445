import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location=useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Donato</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/"? "active":""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/about"? "active":""}`} to="/about">About</Link>
                    </li>
                </ul>
                <Link className="btn btn-primary d-flex mr-auto mx-2" to="/addItem" role="button">Add items</Link>
                <Link className="btn btn-primary d-flex mr-auto" to="/login" role="button">Login</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar