import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = ({title, name}) => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-1 fw-bold mb-3">{name}</h1>
            <h2 className="h3 mb-4">{title}</h2>
            <p className="lead mb-4">
              Transforming ideas into elegant digital solutions. 
              Passionate about creating responsive and user-friendly applications 
              that make a difference.
            </p>
            
            <div className="social-links mb-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaTwitter size={24} />
              </a>
            </div>

            <div className="cta-buttons">
              <Button 
                as={Link}
                to="projects"
                smooth={true}
                duration={500}
                variant="primary"
                size="lg"
                className="me-3"
              >
                View Projects
              </Button>
              <Button 
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                variant="outline-light"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
