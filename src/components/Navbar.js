import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../Assets/logo.png";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar bg="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <div className="logo-container">
            <img src={logo} alt="Bethwel Langat Logo" className="logo-image" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(expanded ? false : "true")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
