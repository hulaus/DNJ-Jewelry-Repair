import React, { useState } from 'react'
import Dnj from "./assets/images/dnj.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Menu open:", menuOpen);
        setMenuOpen(!menuOpen); 
    }

    return (
        <div>
            <main>
                <div className="topnav">
                    <img className="logo" src={Dnj} alt="DNJ logo"></img>
                    <div className='links'>
                        <a href='/login'> Login </a>
                        <a href="/">Home</a>
                        <a href="/jewelry">Jewelry</a>
                        <a href="/aboutUs">About Us</a>
                        <a href="/Custom">Custom Pieces</a>
                        <a href="/forum">The Jewelry Fix</a>
                    </div>
                    <button onClick={toggleMenu} className="hamburger"> 
                        &#9776;
                    </button>
                    {menuOpen && (
                        <div className="dropdown">
                           <a href="/login">Login</a>
                            <a href='/'> Home </a>
                            <a href='/jewelry'> Jewelry </a>
                            <a href="/aboutUs">About Us</a>
                            <a href="/Custom">Custom Pieces</a>
                            <a href="/forum">The Jewelry Fix</a>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Navbar