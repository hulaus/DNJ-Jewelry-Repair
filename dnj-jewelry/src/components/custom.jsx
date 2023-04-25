import React from "react"
import Card from 'react-bootstrap/Card'
import customJewelry from "./assets/images/customJewelry.jpg"
import Bracelet from "./assets/images/Bracelet.png"
import PinUpClose from "./assets/images/PinUpClose.png"
import DangleEarrings from "./assets/images/DangleEarrings.png"
import Customform from "./customForm"

// once the picture is in I'm thinking of changing the intro card into just a regular
// paragraph so that it will span across the whole page and then the picture cards
// will be underneath it. The banner image is linked in the public folder idk why it's 
//not showing up I think i might have it linked wrong but i think it'll look neat. 

function customCards() {
    return(
        <>
            <img className="banner" src={customJewelry} alt="DNJ Custom Jewelry" />
                <div className="container">
                    <Card className="Card" >
                        <Card.Img className="rightPicture"  src={Bracelet}/>
                        <Card.Body>
                            <Card.Title className="introCard">Expertly Crafted, Uniquely Yours</Card.Title>
                                <Card.Text className="textRight">
                                    At DnJ Jewelry, we specialize in creating custom jewelry that is expertly crafted to reflect your unique style. From one-of-a-kind wedding bands to cherised pieces for your collection we have the tools and expertise to bring your vision to life. Trust us to deliver exceptional craftsmanship and personalized service for your custom jewelry needs.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="Card">
                        <Card.Img className="leftPicture"  src={DangleEarrings} />
                        <Card.Body>
                            <Card.Title>Your Dream, Our Crafstmanship</Card.Title>
                            <Card.Text>
                            Experience the joy of owning a truly special piece that reflects your individuality. At DNJ Jewelry, we make your dreams come true with our expert craftsmanship and personalized service. Let us bring your vision to life with our premier custom jewelry services. Trust us to deliver exceptional craftsmanship and outstanding customer service in creating your dream custom jewelry!                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="Card">
                        <Card.Img className="rightPicture" src={PinUpClose} />
                        <Card.Body>
                            <Card.Title>Crafting Your Story</Card.Title>
                            <Card.Text>
                            At DNJ Jewelry, we believe that every piece of jewelry tells a story. Our skilled artisans use meticulous attention to detail and over 40+ years of experience to craft custom jewelry that reflects your unique style and captures your imagination. From exquisite wedding bands to cherished pieces for your collection, our expert craftsmanship and personalized service ensure that your vision comes to life in a truly special way. Trust us to create a custom masterpiece that tells your story with our premier custom jewelry services.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="formCustom">
                    <Customform />
                </div>
        </>
        ) 
    }
            


export default customCards