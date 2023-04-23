import React from "react";
import Card from 'react-bootstrap/Card'

function Cards() {
    return(
        <>
       <Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>How are You?</Card.Header>
        <Card.Img variant="top" src="https://unsplash.com/photos/pOUA8Xay514" />
        <Card.Body>
            <Card.Text>
                I'm Straight Chilling Right Now.
            </Card.Text>
        </Card.Body>
       </Card>
       < br />
       <Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>This is the second card of information</Card.Header>
        <Card.Img variant="top" src="https://unsplash.com/photos/pOUA8Xay514" />
        <Card.Body>
            <Card.Text>
                Yes, I know I am looking right at it
            </Card.Text>
        </Card.Body>
       </Card>
       < br />
       <Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>This is Going well</Card.Header>
        <Card.Img variant="top" src="https://unsplash.com/photos/pOUA8Xay514" />
        <Card.Body>
            <Card.Text>
                Yes it is
            </Card.Text>
        </Card.Body>
       </Card>
       < br />
       </>
    )
}

export default Cards