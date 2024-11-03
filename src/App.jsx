import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Listings from './pages/Listings.jsx';
import Contact from './pages/Contact.jsx';
import SignIn from './pages/SignIn.jsx';  
import SignUp from './pages/SignUp.jsx';
import HouseDetail from './pages/HouseDetail';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/listings" element={<Listings />} /> 
                <Route path="/house/:id" element={<HouseDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} /> 
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

