import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="RealHome Logo" className="logo" />
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/listings">Listings</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/signin">Sign In</Link></li> 
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;