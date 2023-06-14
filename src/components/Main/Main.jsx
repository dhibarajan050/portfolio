import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Skill from '../skill/Skill';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <AboutUs/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Main
