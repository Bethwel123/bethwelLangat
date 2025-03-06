import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { API_URL } from "../letConfig";

const Projects = () => {

  const projects = [
    {
      "id": 1,
      "title": "E-commerce Platform",
      "description": "Full-stack e-commerce solution with payment integration",
      "technologies": ["React", "Node.js", "Flask", "Stripe"],
      "image": "https://imgs.search.brave.com/AmjyOqh1VuTZLISukjqV36IGhtivwLwxb75zISJEdTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lYXN5LXNob3Bw/aW5nLW9ubGluZS1j/b25jZXB0XzM2NzQz/LTI5MS5qcGc_c2Vt/dD1haXNfaHlicmlk",
      "github": "https://github.com/johndoe/ecommerce",
      "live": "https://ecommerce-demo.com"
    },
    {
      "id": 2,
      "title": "Task Management System",
      "description": "Real-time task management application with team collaboration",
      "technologies": ["React", "Firebase", "Bootstrap"],
      "image": "https://imgs.search.brave.com/c6uq1WgqjUFKDNvq3dp5i_Rl-mPAYjxNAARz4F7HTSk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NTI4NzY0NC9waG90/by9wcm9qZWN0LW1h/bmFnZXItYW5hbHlz/dC13b3JraW5nLXdp/dGgtY29tcHV0ZXIt/aW4tbWFuYWdlbWVu/dC1zeXN0ZW0tdG8t/cHJvZ3Jlc3MtcGxh/bm5pbmctYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1V/Nm9USjF0YjBIU2Rt/T3VKN0hmN0Z4NXAt/ZnNFTThXZE4zZ18w/eFI5U3dzPQ",
      "github": "https://github.com/johndoe/taskmanager",
      "live": "https://taskmanager-demo.com"
    }
  ]

  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="text-center mb-5 fw-bold" >Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={6} className="mb-4">
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-2">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button href={project.github} target="_blank" variant="dark">
                      <FaGithub className="me-2" />Code
                    </Button>
                    <Button href={project.live} target="_blank" variant="primary">
                      <FaExternalLinkAlt className="me-2" />Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
