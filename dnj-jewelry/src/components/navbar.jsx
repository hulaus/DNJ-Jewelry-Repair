import { useState } from "react";

function Navbar() {
  const [customDropdownOpen, setCustomDropdownOpen] = useState(false);
  const [jewelryDropdownOpen, setJewelryDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleCustomDropdown = () => setCustomDropdownOpen(!customDropdownOpen);
  const toggleJewelryDropdown = () => setJewelryDropdownOpen(!jewelryDropdownOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);

  const closeDropdowns = () => {
    setCustomDropdownOpen(false);
    setJewelryDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <div onMouseLeave={closeDropdowns}>
      <main>
        <div className="topnav">
          <a href="/">Home</a>
          <a href="/jewelry" onMouseEnter={toggleJewelryDropdown} onMouseLeave={toggleJewelryDropdown}>Jewelry
            {jewelryDropdownOpen && (
              <div className="dropdown-content">
                <a href="/jewelry/necklaces">Necklaces</a>
                <a href="/jewelry/earrings">Earrings</a>
                <a href="/jewelry/rings">Rings</a>
                <a href="/jewelry/rings">Bracelets</a>
              </div>
            )}
          </a>
          <a href="/aboutUs" onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>About Us
            {aboutDropdownOpen && (
              <div className="dropdown-content">
                <a href="/aboutUs/history">History</a>
                <a href="/aboutUs/team">Our Team</a>
                <a href="/aboutUs/locations">Locations</a>
              </div>
            )}
          </a>
          <a href="/Custom" onMouseEnter={toggleCustomDropdown} onMouseLeave={toggleCustomDropdown}>Custom Pieces
            {customDropdownOpen && (
              <div className="dropdown-content">
                <a href="/Custom/necklaces">Necklaces</a>
                <a href="/Custom/earrings">Earrings</a>
                <a href="/Custom/rings">Rings</a>
                <a href="/Custom/rings">Bracelets</a>
              </div>
            )}
          </a>
          <a href="/forum">The Jewelry Fix</a>
        </div>
      </main>
    </div>
  );
}

export default Navbar;