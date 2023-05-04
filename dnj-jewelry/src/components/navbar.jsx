import React, { useState } from 'react' // ADDED
import Dnj from "./assets/images/dnj.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // ADDED

    const toggleMenu = () => { // ADDED
        console.log("Menu open:", menuOpen); // ADDED
        setMenuOpen(!menuOpen); // ADDED
    }

    return (
        <div>
            <main>
                <div className="topnav">
                    <img className="logo" src={Dnj} alt="DNJ logo"></img>
                    <a href="/">Home</a>
                    <a href="/jewelry">Jewelry</a>
                    <a href="/aboutUs">About Us</a>
                    <a href="/Custom">Custom Pieces</a>
                    <a href="/forum">The Jewelry Fix</a>
                    {/* ADDED */}
                    <button onClick={toggleMenu} className="hamburger"> 
                        &#9776;
                    </button>
                    {menuOpen && (
                        <div className="dropdown">
                            <a href="/login">Login</a>
                            <a href="/signup">Sign Up</a>
                        </div>
                    )}
                    {/* END */}
                </div>
            </main>
        </div>
    )
}

export default Navbar