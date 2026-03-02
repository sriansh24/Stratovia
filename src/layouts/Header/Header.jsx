import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo/stratovia-logo5.webp";
// import logo from "../../assets/img/logo/stratovia-logo2.png";
import "../../assets/css/GlobalCss/styles.css"

function MainLayoutHeader() {
  return (
    <>
      <Navbar
        className="main-navbar"
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
      >
        <Container fluid className="d-flex align-items-center flex-nowrap mx-md-3 px-md-4">
          <Navbar.Brand href="/stratovia/home" className="me-4">
            <img
              src={logo}
              className="navbar-logo"
              alt="Stratovia Logo"
            />
            {/* <p><i>STRATOVIA</i></p> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto align-items-center gap-lg-4">
              <Nav.Link href="/stratovia/home">Home</Nav.Link>
              <Nav.Link href="/stratovia/blog">Blog</Nav.Link>
              <Nav.Link href="/stratovia/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/stratovia/help">Help</Nav.Link>
              <Nav.Link href="/stratovia/stratovia-airo">StratoviaAiro</Nav.Link>
              <Nav.Link href="/stratovia/pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default MainLayoutHeader;
