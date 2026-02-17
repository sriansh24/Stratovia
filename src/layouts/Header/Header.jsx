import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../assets/img/logo/stratovia-logo.webp';

function MainLayoutHeader() {
    return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="120"
              height="30"
              className="d-inline-block align-top"
              alt="Stratovia Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#stratovia-airo">StratoviaAiro</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default MainLayoutHeader;