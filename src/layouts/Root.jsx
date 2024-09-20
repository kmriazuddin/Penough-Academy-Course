import React from 'react';
import HeroSection from '../context/Hero.jsx';
import Course from '../context/Defensive201.jsx';
import Navbar from '../context/Navbar.jsx';



const Root = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Root;