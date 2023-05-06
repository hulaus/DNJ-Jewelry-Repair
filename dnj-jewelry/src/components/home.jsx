import React from "react"
// import WelcomeBanner from './assets/images/Welcome_Banner.jpg'
import Repairs from './assets/videos/Ring.mp4'
import { Link } from "react-router-dom"
import JewelrySketch from './assets/images/JewelrySketch.jpeg'
import ReviewOne from './assets/images/reviewOne.png'
import ReviewTwo from './assets/images/reviewTwo.png'
import ReviewThree from './assets/images/reviewThree.png'
import ReviewFour from './assets/images/reviewFour.png'


function Home() {
    return (
      <>
        <div className="videocontainer">
          <video src={Repairs}
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
        <div className="services-container">
          <div className="services-title">
            <h2>Our Services</h2>
            <p>See what we have to offer</p>
          </div>
          <div className="services-list">
            <ul>
              <li>Ring Resizing</li>
              <li>Diamond Replacement</li>
              <li>Chain Soldering</li>
              <li>Jewelry Polishing & Cleaning</li>
            </ul>
            <a href="/services">View all services</a>
          </div>
          <div className="custom-button-container">
          <h2 className="custom-button-header">Get Your Custom Piece</h2>
          <p className="custom-button-description">Looking for a unique piece of jewelry? Let us create a custom piece just for you!</p>
          <div className="custom-button">
            <Link to="/custom">
              <img src={JewelrySketch} alt="Jewelry Sketch in black and white" />
              <span className="custom-button-text">Custom Pieces</span>
            </Link>
          </div>
          </div>
          <div className="google-reviews">
            <div className="testimonials">
            <h2> Testimonials </h2>
                <p>See what our customers are saying about us!</p>
            </div>
                <div className="google-photos">
            <img src={ ReviewOne } alt="google review from a customer"/>
            <img src={ ReviewTwo } alt="google review from a customer"/>
            <img src={ ReviewThree } alt="google review from a customer"/>
            <img src={ ReviewFour } alt="google review from a customer" />
                </div>
          </div>
        </div>
      </>
    )
  }
export default Home