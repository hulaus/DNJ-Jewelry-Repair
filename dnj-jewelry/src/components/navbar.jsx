import Dnj from "./assets/images/dnj.png"

function Navbar() {

    return (
            <div>
                <main>
                    <div className="topnav">
                        <img className="logo" src={Dnj} alt="DNJ logo"></img>
                        <a href="/">Home</a>
                        <a href="/jewelry">Jewelry</a>
                        <a href="/aboutUs">About Us</a>
                        <a href="/Custom">Custom Pieces</a>
                        <a href="/ImageGallery">Custom Creation Gallery</a>
                    </div>
                </main>
        </div>
    )
}

export default Navbar