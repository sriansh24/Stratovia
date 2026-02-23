import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../../assets/img/logo/stratovia-logo.webp";
import logo from "../../assets/img/logo/stratovia-logo2.png";
import "../../assets/css/GlobalCss/styles.css"

function MainLayoutHeader() {
  return (
    <>
      <Navbar
        className="py-3 main-navbar"
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
      >
        <Container fluid className="px-3 px-lg-5 px-xxl-6">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="navbar-logo"
              alt="Stratovia Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="align-items-lg-center gap-lg-4 text-center text-lg-start">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
              <Nav.Link href="#stratovia-airo">StratoviaAiro</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default MainLayoutHeader;
