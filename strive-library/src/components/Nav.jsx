

import {Navbar, Nav, Container} from 'react-bootstrap'

const MyNavbar = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#browse">BROWSE</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
)
  }

export default MyNavbar