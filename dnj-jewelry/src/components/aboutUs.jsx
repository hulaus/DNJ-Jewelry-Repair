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
        <img className="aboutUsPic" src={ Dad } alt="master Jeweler Behind Glass Display Ready to help customers"/>
      </div>
      <div className="HeadingUnderPicture">
        <h2>About DNJ Jewelry Repair</h2>
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