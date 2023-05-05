import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook,faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";


function SocialFollow() {
    return(
        <div  className='social-footer'>
            <h3 className="SocialHead">Follow Us!</h3>
            <div  className="social-icons">
            <a href="https://www.instagram.com/dnjjewelry/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="1.25x"/>
            </a>
            <a href="https://www.facebook.com/DNJJEWELRYREPAIR/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1.25x" />
            </a>
            <a href="https://twitter.com/JewelryDNJ" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1.25x" />
            </a>
            <a href="https://www.tiktok.com/@dnj_jewelry_repair" className="tiktok social">
                <FontAwesomeIcon icon={faTiktok} size="1.25x" />
            </a>
            </div>
        </div>
    );
}

export default SocialFollow