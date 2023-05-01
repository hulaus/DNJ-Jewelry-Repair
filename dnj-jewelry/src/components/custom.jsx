import React from "react";
import Card from "react-bootstrap/Card";
import customJewelry from "./assets/images/customJewelry.jpg";
import PinUpClose from "./assets/images/pinUpClose.png";
import Customform from "./customForm";
import ThreeFourLion from './assets/images/ThreeFourthsLionFace.png'
import ReligiousPendant from './assets/images/ReligiousPendant.png'
import TwoWeddingBands from './assets/images/TwoWeddingBands.jpeg'

function customCards() {
  return (
    <>
      <img className="banner" src={customJewelry} alt="DNJ Custom Jewelry" />
      <div className="container" style={{ paddingTop: "2rem" }}>
        <Card className="customCard">
          <div className="imgContainer">
            <Card.Img className="rightPicture" src={ThreeFourLion} />
          </div>
          <Card.Body className="card-content">
            <Card.Title>
              <h2>Expertly Crafted, Uniquely Yours</h2>
            </Card.Title>
            <Card.Text >
             <p>At DnJ Jewelry, we specialize in creating custom jewelry that is
              expertly crafted to reflect your unique style. From one-of-a-kind
              wedding bands to cherised pieces for your collection we have the
              tools and expertise to bring your vision to life. Trust us to
              deliver exceptional craftsmanship and personalized service for
              your custom jewelry needs.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="customCard middleCard">
          <div className="imgContainer">
            <Card.Img className="leftPicture" src={ReligiousPendant} />
          </div>
          <Card.Body className="card-content">
            <Card.Title>
                <h2>Your Dream, Our Crafstmanship</h2>
                </Card.Title>
            <Card.Text>
              <p>Experience the joy of owning a truly special piece that reflects
              your individuality. At DNJ Jewelry, we make your dreams come true
              with our expert craftsmanship and personalized service. Let us
              bring your vision to life with our premier custom jewelry services.
              Trust us to deliver exceptional craftsmanship and outstanding
              customer service in creating your dream custom jewelry!</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="customCard">
          <div className="imgContainer">
            <Card.Img className="rightPicture" src={TwoWeddingBands} />
          </div>
          <Card.Body className="card-content">
          <Card.Title >
            <h2>Crafting Your Story</h2>
            </Card.Title>
            <Card.Text >
              <p>At DNJ Jewelry, we believe that every piece of jewelry tells a
              story. Our skilled artisans use meticulous attention to detail and
              over 40+ years of experience to craft custom jewelry that reflects
              your unique style and captures your imagination. From exquisite
              wedding bands to cherished pieces for your collection, our expert
              craftsmanship and personalized service ensure that your vision
              comes to life in a truly special way. Trust us to create a custom
              masterpiece that tells your story with our premier custom jewelry
              services.</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="formCustom">
        <Customform />
      </div>
    </>
  );
}

export default customCards;