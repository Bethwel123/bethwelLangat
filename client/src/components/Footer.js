import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://github.com/Bethwel123" className="text-light mx-3 fs-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/bethwellangat044b" className="text-light mx-3 fs-4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/BethwelLan28728" className="text-light mx-3 fs-4" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/its_me_bethwel" className="text-light mx-3 fs-4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Developer Bethwel. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
