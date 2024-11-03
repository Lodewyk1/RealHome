import React from 'react';
import './About.css';
import houseImage from '../assets/about.jpg'; 

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h2>About RealHome</h2>
                <h3>Your trusted real estate partner.</h3>
            </div>
            <div className="about-content">
                <img src={houseImage} alt="House" className="about-image" />
                <p>
                    At RealHome, we believe that everyone deserves a place to call home. Our dedicated team of
                    professionals is here to guide you through every step of the real estate process, ensuring a
                    smooth and enjoyable experience. Whether you are buying, selling, or renting, we are committed
                    to providing exceptional service tailored to your unique needs.
                </p>
                <p>
                    Our extensive knowledge of the local market allows us to provide you with the best options available.
                    We pride ourselves on our integrity, professionalism, and our ability to understand our clients'
                    needs. Join us at RealHome, where your real estate journey begins!
                    <hl></hl>
                </p>
            </div>
        </div>
    );
}

export default About;
