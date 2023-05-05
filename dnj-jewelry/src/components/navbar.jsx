import Dnj from "./assets/images/dnj.png"

function Navbar() {

    return (
            <div>
                <main>
                    <div className="topnav">
                        <img className="logo" src={Dnj} alt="DNJ logo"></img>
                           <button className="toggle-button">
                                <span className="hamburger"></span>
                                <span className="hamburger"></span>
                                <span className="hamburger"></span>
                           </button>
                           <div className="links">
                                <a href="/">Home</a>
                                <a href="/jewelry">Jewelry</a>
                                <a href="/aboutUs">About Us</a>
                                <a href="/Custom">Custom Pieces</a>
                                <a href="/ImageGallery">Custom Creation Gallery</a>
                            </div>
                    </div>
                </main>
        </div>
    )
}

export default Navbar