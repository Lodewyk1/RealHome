import React from 'react';
import './Home.css';
import heroImage from '../assets/hero.jpg'; 

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <img src={heroImage} alt="Beautiful house" className="hero-image" />
                <div className="home-header"> 
                    <h2>Welcome to RealHome</h2>
                    <h3>Your trusted real estate partner.</h3>
                </div>
            </div>
            <div className="supporting-text">
                <p>
                    At RealHome, we believe that finding the perfect home should be an exciting journey. Our team of dedicated real estate professionals is here to guide you every step of the way, whether you're buying, selling, or renting. With years of experience in the industry, we have the knowledge and resources to help you make informed decisions.
                </p>
                <h4>Why Choose Us?</h4>
                <ul>
                    <li>🏡 Extensive Listings: Explore a wide range of properties that suit your needs and budget.</li>
                    <li>🤝 Personalized Service: Our agents work closely with you to understand your unique preferences.</li>
                    <li>💡 Expert Advice: Benefit from our deep market insights and negotiation skills.</li>
                    <li>🌟 Trusted Network: We connect you with reliable mortgage lenders, inspectors, and contractors.</li>
                </ul>
                <h4>Get Started Today!</h4>
                <p>
                    Ready to find your dream home? Browse our listings or contact us for a personalized consultation. 
                    Let's make your real estate dreams a reality!
                </p>
            </div>
        </div>
    );
}

export default Home;