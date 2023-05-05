import React from "react"
// import WelcomeBanner from './assets/images/Welcome_Banner.jpg'
import Repairs from './assets/videos/Ring.mp4'

function Home() {
    return (
    <>
    <div className="videocontainer">
        <video src={ Repairs } 
        autoPlay
        muted
        loop
        className="homepage-video"
        />
    </div>
    <div className="ContentUnderBanner">
        <h3>
        Expert Jewelry Repair Services for Over 20 Years.
        </h3>
        <p>
            Our Team of experienced jewelers have been repairing jewelry for over 20 years. From simple repairs to intricate restorations, we handle it all with care and precision.
        </p>
    </div>
    </>
        )
}

export default Home