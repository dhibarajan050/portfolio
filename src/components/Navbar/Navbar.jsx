import React from 'react';
// import './Navbar_Style.scss'


function Navbar() {

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 1);
    })

    const toogleMenu = () => {
        const menuToggle = document.querySelector(".menuToggle");
        const ul = document.querySelector("ul");
        const navbackground = document.querySelector('nav');
        menuToggle.classList.toggle('active');
        ul.classList.toggle('active');
        navbackground.classList.toggle('active');
    }
    return (
        <div>
            <nav>
                <a href="/" className="logo">Dhibarajan <span>.</span></a>
                <div className="menuToggle" onClick={toogleMenu}></div>
                <ul className="navigation">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
