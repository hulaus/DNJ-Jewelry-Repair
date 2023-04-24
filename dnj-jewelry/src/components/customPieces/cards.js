import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'

function Cards() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
    /* 
        (
        <>
            <Card border="dark" style={{ width: '100%' }}>
                <Row>
                    <Col>
                <Card.Header>How are You?</Card.Header>
                    </Col>
                </Row>
                <Row>
                <Card.Body>
                    <Col>
                    <Card.Text>
                        I'm Straight Chilling Right Now.
                    </Card.Text>
                    </Col>
                </Card.Body>
                </Row>
            </Card>
            <br />
            <Card border="primary" style={{ width: '100%' }}>
                <Card.Header>This is the second card of information</Card.Header>
                <Card.Body>
                    <Card.Img className="img-fluid" src="https://unsplash.com/photos/pOUA8Xay514" />
                    <Card.Text>
                        Yes, I know I am looking right at it
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="primary" style={{ width: '100%' }}>
                <Card.Header>This is Going well</Card.Header>
                <Card.Body>
                    <Card.Img className="img-fluid" src="https://unsplash.com/photos/pOUA8Xay514" />
                    <Card.Text>
                        Yes it is
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
    */
}
export default Cards;