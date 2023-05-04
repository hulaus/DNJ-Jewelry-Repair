import React from "react"
import WelcomeBanner from './assets/images/Welcome_Banner.jpg'
// import Jeweler from "./assets/images/Jeweler.png"


function Home() {
    return (
    <>
    <div classname="image-container">
        <img className="welcomebanner" src={ WelcomeBanner }  alt="DNJ Jewelry Repair's Welcome Banner with the motto The Right way for Jewelry"/>
    </div>
    </>
        )
}

export default Home