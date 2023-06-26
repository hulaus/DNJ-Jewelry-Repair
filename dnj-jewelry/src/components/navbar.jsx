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
                  <span><img className="logo" src={Dnj} alt="DNJ logo"></img></span>  
                    <div className='links'>
                        <a className='topnav-links' href="/">Home</a>
                        <a className='topnav-links' href="/jewelry">Jewelry</a>
                        <a className='topnav-links' href="/aboutUs">About Us</a>
                        <a className='topnav-links' href="/Custom">Custom Pieces</a>
                        <a className='topnav-links' href="/forum">The Jewelry Fix</a>
                    </div>
                    <button onClick={toggleMenu} className="hamburger"> 
                        &#9776;
                    </button>
                    {menuOpen && (
                        <div className="hamdropdown">
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