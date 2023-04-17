import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SearchContext from "../context/search/searchContext";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const context = useContext(SearchContext);
    const { search } = context;
    const onChange = (event) => {
        const keyword = event.target.value.toLowerCase();
        search(keyword);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: '0px 5px 10px 0px #aaa',position: 'fixed',width: '100%',background: '#fff',color: '#000',zIndex: '100'}}>
        <div className="container-fluid container" style={{display: 'flex',justifyContent: 'space-between',height: '55px',alignItems: 'center'}}>
                <Link className="navbar-brand" to="/" style={{fontSize: '2.3rem',fontFamily: 'Delicious Handrawn', color: '#fd5c63'}}>Donato</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {!localStorage.getItem('token') ? <>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </> : <>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/api/product/addproduct" ? "active" : ""}`} to="/api/product/addproduct" >Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/buy" ? "active" : ""}`} to="/buy" >Buy request</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`} to="/cart" >Cart</Link>
                            </li>
                        </>}
                    </ul>
                    <form className="d-flex input-group w-auto">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={onChange} />
                    </form>

                    {!localStorage.getItem('token') ?
                        <><Link className="btn buton d-flex mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn buton d-flex mx-1" to="/signup" role="button">Signup</Link> </> : <>
                            <Link className="btn buton d-flex mx-1" to="/login" role="button" onClick={() => { localStorage.removeItem('token'); navigate('/login') }}>Logout</Link></>}
                </div>
            </div>
        </nav>
    )
}


export default Navbar