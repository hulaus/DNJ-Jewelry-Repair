import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Bench from '../images/JewelerAtBench.jpeg'
import SettingDiamond from '../images/SettingDiamond.jpeg'
import WeddingPhoto from '../images/WeddingPhoto.jpeg'

function AboutUsCards() {
    return(
        <>
        <Row className="g-3">
          <Card className="AboutUsCard" xs={1} md={3}>
            <Card.Title className="CardTitle">
                Expert Crafstman You Can Trust
            </Card.Title>
            <Card.Img  className="CardImage" variant="top" src={ Bench } alt="Jeweler At Bench"/>
            <Card.Text>
                With more than 30 Years of experience as goldsmiths and jewelry repair specialists, our master craftsmen are skilled in providing meticulous attention to detail and unmatched quality.
                You can Trust us to handle your precious jewelry with the utmost care and expertise.
            </Card.Text>
            </Card>
            <Card className="AboutUsCard" xs={1} md={3}>
                <Card.Title className="CardTitle">
                    Why Choose Us?
                </Card.Title>
                <Card.Img className="CardImage" variant="top" src={ SettingDiamond } alt="Jeweler Setting Diamond on Eternity Style Ring."/>
                <Card.Text>
                Our Reputation as a trusted jeweler speaks for itself. 
                For over 30 years, we've served as the go to jewelry experts for well-known names in the Las Vegas area, including MGM Jewelry Store, Gabriel Jewelers, Ultra Diamonds, MJ Christensens, Na Hoku, Miner's Gems and Cash America (Super Pawn).
                When you trust us with your precious jewelry, you can be confident that it's in the hands of experienced, skilled crafstmen who take pride in their work!
                </Card.Text>
            </Card>
            <Card className="AboutUsCard" xs={1} md={3}>
                <Card.Title className="CardTitle">
                    Celebrating Life Through Jewelry
                </Card.Title>
                <Card.Img className="CardImage" variant="top" src={ WeddingPhoto }/>
                <Card.Text>
                    We Believe in Celebrating life's precious moments, big or small.
                    Our mission is to be there for our customers, offering unique jewelry pieces that help create meaningful connections with loved ones.
                    We strive to inspire love, happines, and friendships through our collection, and help our customers make memories that last a lifetime.
                </Card.Text>
            </Card>
        </Row>
        ),
    )
        
</>
    );
}
export default AboutUsCards
