import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook,faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";


function SocialFollow() {
    return(
        <div class="social-container">
            <h3>Follow Us!</h3>
            <a href="https://www.instagram.com/dnjjewelry/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://www.facebook.com/DNJJEWELRYREPAIR/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/JewelryDNJ" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@dnj_jewelry_repair" className="tiktok social">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
        </div>
    );
}

export default SocialFollow