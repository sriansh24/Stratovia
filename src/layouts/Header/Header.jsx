import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu } from "lucide-react";
import logo from "../../assets/img/logo/stratovia-logo5.webp";
import "../../assets/css/GlobalCss/styles.css";

function MainLayoutHeader() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        className="main-navbar"
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
      >
        <Container
          fluid
          className="d-flex align-items-center flex-nowrap mx-md-3 px-md-4"
        >
          <Navbar.Brand href="/stratovia/home" className="me-4">
            <img src={logo} className="navbar-logo" alt="Stratovia Logo" />
          </Navbar.Brand>
          <button
            className="custom-toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <Menu />
          </button>
          <div className={`custom-collapse ${expanded ? "open" : ""}`}>
            <Nav className="ms-auto align-items-center gap-lg-4">
              <Nav.Link href="/stratovia/home">Home</Nav.Link>
              <Nav.Link href="/stratovia/blog">Blog</Nav.Link>
              <Nav.Link href="/stratovia/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/stratovia/help">Help</Nav.Link>
              <Nav.Link href="/stratovia/stratovia-airo">
                StratoviaAiro
              </Nav.Link>
              <Nav.Link href="/stratovia/pricing">Pricing</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default MainLayoutHeader;
