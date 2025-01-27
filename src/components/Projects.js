import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://localhost/5000/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log('Error fetching skills:', error);
      }
    };

    fetchProjects();
  }, []);

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
