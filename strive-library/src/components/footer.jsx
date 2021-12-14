import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const MyFooter = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
          <ul>
            <li> Home</li>
            <li> About Us</li>
            <li> Search</li>
          </ul>
          </Col>
          <Col>
          <ul>
            <li> Contact Us</li>
            <li> Lisbon</li>
            <li> Portugal</li>
          </ul>
          </Col>
          <Col>
          <ul>
            <li> link 1</li>
            <li> Link 2</li>
            <li> Link 3</li>
          </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter;