import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SECRET_KEY from '../config';
// import { API_URL } from "../letConfig";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetch(`http://localhost:5555/personalInfo`);
      const data = await response.json();
      setContactInfo(data);
    };

    fetchContactInfo();
  }, []);
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validation checks
    if (!name || !email || !message) {
      alert("All fields are required. Please fill out the form.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    formData.append("access_key", SECRET_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
  
      if (res.success) {
        alert(res.message);
        event.target.reset();
      } else {
        throw new Error(res.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error: ", error);
      alert("Failed to submit form. Please try again");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Get In Touch</h2>
        <p className="text-center mb-5">I am currently available to take new projects, so feel free to Holla
        me up!🤙</p>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <div className="text-center">
              <FaEnvelope className="fs-1 text-primary mb-3" />
              <h5>Email</h5>
              <p>{contactInfo.email}</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <FaPhone className="fs-1 text-primary mb-3" />
              <h5>Phone</h5>
              <p>{contactInfo.phone}</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <FaMapMarkerAlt className="fs-1 text-primary mb-3" />
              <h5>Location</h5>
              <p>{contactInfo.location}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={onSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Your Message"
                  name="message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;