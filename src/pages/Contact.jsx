import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2 className="contact-header">Contact Us</h2>
            <p className="contact-subtitle">We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Your Name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Your Email" required />
                </label>
                <label>
                    Subject:
                    <input type="text" name="subject" placeholder="Subject" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </label>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;

