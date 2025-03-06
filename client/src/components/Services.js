import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaServer, FaTools, FaLaptopCode, FaRocket, FaLock } from 'react-icons/fa';
// import { API_URL } from "../letConfig";


const Services = () => {
  const services = [
    {
      "id": 1,
      "icon": "FaCode",
      "title": "Frontend Development",
      "description": "Creating responsive React-based user interfaces",
      "features": [
        "React Single Page Applications",
        "Component Development",
        "State Management",
        "Frontend Routing",
        "React Hooks Implementation",
        "Context API Usage"
      ]
    },
    {
      "id": 2,
      "icon": "FaServer",
      "title": "Backend Development",
      "description": "Building Flask-powered backend services",
      "features": [
        "REST API Development with Flask",
        "Basic Database Integration",
        "Route Management",
        "API Authentication",
        "Flask Blueprints",
        "Session Management"
      ]
    },
    {
      "id": 3,
      "icon": "FaLaptopCode",
      "title": "Web Development",
      "description": "Full-stack development with React and Flask",
      "features": [
        "Frontend-Backend Integration",
        "Version Control with Git",
        "Basic Web Deployment",
        "API Integration",
        "Environment Setup",
        "Development Workflow"
      ]
    },
    {
      "id": 4,
      "icon": "FaTools",
      "title": "Development Tools",
      "description": "Implementing essential development tools and practices",
      "features": [
        "Git Repository Management",
        "Branch Strategy",
        "Collaborative Development",
        "Code Review Process",
        "Merge Conflict Resolution",
        "Version Tagging"
      ]
    },
    {
      "id": 5,
      "icon": "FaRocket",
      "title": "Project Deployment",
      "description": "Deploying web applications to production",
      "features": [
        "Heroku Deployment",
        "Vercel Integration",
        "Environment Configuration",
        "Deployment Automation",
        "Basic CI/CD Setup",
        "Domain Setup"
      ]
    },
    {
      "id": 6,
      "icon": "FaLock",
      "title": "Security Implementation",
      "description": "Basic security measures for web applications",
      "features": [
        "Flask Security Setup",
        "React Form Validation",
        "Authentication Flow",
        "Protected Routes",
        "CORS Configuration",
        "Basic Security Headers"
      ]
    }
  ]


  const getIcon = (iconName) => {
    const icons = {
      FaCode: <FaCode />,
      FaServer: <FaServer />,
      FaLaptopCode: <FaLaptopCode />,
      FaTools: <FaTools />,
      FaRocket: <FaRocket />,
      FaLock: <FaLock />,

    };
    return icons[iconName];
  };

  return (
    <section id="services" className="section">
      <Container>
        <h2 className="text-center mb-5 fw-bold" >My Services</h2>
        <Row>
          {services.map((service) => (
            <Col lg={4} md={6} className="mb-4" key={service.id}>
              <Card className="service-card h-100 text-center">
                <Card.Body>
                  <div className="service-icon mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <Card.Title className="mb-3">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
