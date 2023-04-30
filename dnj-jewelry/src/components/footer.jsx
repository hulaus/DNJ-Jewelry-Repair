import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading} from './footerstyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook,faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return(
        <>
        <Box className="footer-">
            <h2 style={{ color: "black",
                        textAlign: "center",
                       }}>
            Get the Latest from DNJ Jewelry Repair !            
            </h2>
            <Container>
                <Row>
                    <Column>
                    <Heading>Follow Us!</Heading>
                    <FooterLink href="https://www.instagram.com/dnjjewelry/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/DNJJEWELRYREPAIR/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </FooterLink>
            <FooterLink href="https://twitter.com/JewelryDNJ" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </FooterLink>
            <FooterLink href="https://www.tiktok.com/@dnj_jewelry_repair" className="tiktok social">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
            </FooterLink>
                    </Column>
                </Row>
            </Container> 
        </Box>
        </>
    )
}

export default Footer