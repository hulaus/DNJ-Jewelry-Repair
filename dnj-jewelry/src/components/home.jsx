import React from "react"
import WelcomeBanner from './assets/images/Welcome_Banner.jpg'
// import Jeweler from "./assets/images/Jeweler.png"


function Home() {
    return (
    <>
    <div className="homePageHeader">
    <h1>DNJ Jewelry Repair</h1>
    <div classname="image-container">
        <img className="picture-inside-container" src={ WelcomeBanner }  alt="DNJ Jewelry Repair's Welcome Banner with the motto The Right way for Jewelry"/>
    </div>
    </div>
    </>
        )
}

export default Home