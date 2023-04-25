import React from "react"
import Card from 'react-bootstrap/Card'
import customJewelry from "./assets/images/customJewelry.jpg"
import Bracelet from "./assets/images/Bracelet.png"
import PinUpClose from "./assets/images/PinUpClose.png"
import DangleEarrings from "./assets/images/DangleEarrings.png"

// once the picture is in I'm thinking of changing the intro card into just a regular
// paragraph so that it will span across the whole page and then the picture cards
// will be underneath it. The banner image is linked in the public folder idk why it's 
//not showing up I think i might have it linked wrong but i think it'll look neat. 

function customCards() {
    return(
        <>
            <img className="banner" src={customJewelry} alt="DNJ Custom Jewelry" />
                <div className="container">
                    <Card className="intro" style={{ width: '18rem'}}>
                        <Card.Img className="rightPicture" variant='top' src={Bracelet}/>
                        <Card.Body>
                            <Card.Title className="introCard"> Customly Created, Expertly Crafted </Card.Title>
                                <Card.Text>
                                    At DnJ Jewelry, we believe everyone should have the right to confidently display
                                    a piece of jewelry that means something to them. Whether it's one of a kind wedding
                                    bands or just another piece for your collection, DnJ has the tools and the expertise
                                    to bring your vision to life. 
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="CustPic">
                        <Card.Img className="leftPicture" variant="top" src={DangleEarrings} />
                        <Card.Body>
                            <Card.Text>
                                Text explaining the jewelery
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card className="CustPic">
                        <Card.Img className="rightPicture" variant="top" src={PinUpClose} />
                        <Card.Body>
                            <Card.Text>
                                Text explaining the jewelery
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </div>
        </>
        ) 
    }
            


export default customCards