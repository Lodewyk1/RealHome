import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
            setIsVisible(scrolledToBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer style={{ display: isVisible ? 'block' : 'none' }}>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} RealHome. All rights reserved.</p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/listings">Listings</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
