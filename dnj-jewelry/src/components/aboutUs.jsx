import React from "react";
import Dad from './assets/images/Jeweler.png'
import AboutUsCards from '../components/assets/AboutUs/aboutUsCards'
import Contactus from "./assets/AboutUs/ContactUs";
import DNJ from './assets/images/dnj.png'

function AboutUs () {
    return (
      <>
      <div className="AboutUsLogo">
      <img src={ DNJ } alt="DNJ Jewelry Repair's Logo"/>
      </div>
      <div class="AboutUs">
        <img className="aboutUsPic" src={ Dad } alt="Picture of Master Jeweler Behind Jewelry Display Ready to Help Customers Walking through the door"/>
      </div>
      <div className="HeadingUnderPicture">
        <h4>About DNJ Jewelry Repair</h4>
        </div>
        <div>
        <AboutUsCards />
      </div>
      <div>
        <Contactus />
      </div>
      </>
    
    )


}

export default AboutUs