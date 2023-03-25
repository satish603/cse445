import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location=useLocation();
    const navigate=useNavigate();
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
            {!localStorage.getItem('token')?
            <><Link className="btn btn-primary d-flex mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary d-flex mx-1" to="/signup" role="button">Signup</Link> </>: <><Link className="btn btn-primary d-flex mx-1" to="/api/product/addproduct" role="button">Add Product</Link>
            <Link className="btn btn-primary d-flex mx-1" to="/login" role="button" onClick={()=>{localStorage.removeItem('token'); navigate('/login')}}>Logout</Link></>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar