import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaStar,
  FaGit,
} from "react-icons/fa";
import data from "./api/data"
// import { API_URL } from "../letConfig";

const Skills = () => {
  const [skills, setSkills] = useState({
    frontend: [],
    backend: [],
    database: [],
    tools: [],
    softSkills: [],
    git: [],
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // const response = await fetch(`http://localhost:5555/skills`);
        // const data = await response.json();
        // setSkills(data);
        setSkills(data);
      } catch (error) {
        console.log("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skill-section">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Skills & Technologies</h2>
        <Row>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaCode className="fs-1 text-primary mb-3" />
              <Card.Title>Frontend</Card.Title>
              <Card.Body>
                {Array.isArray(skills?.frontend) &&
                  skills.frontend.map((skill, index) => (
                    <span key={index} className="badge bg-primary m-1">
                      {skill}
                    </span>
                  ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaServer className="fs-1 text-success mb-3" />
              <Card.Title>Backend</Card.Title>
              <Card.Body>
                {skills.backend.map((skill, index) => (
                  <span key={index} className="badge bg-success m-1">
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaDatabase className="fs-1 text-info mb-3" />
              <Card.Title>Database</Card.Title>
              <Card.Body>
                {skills.database.map((skill, index) => (
                  <span key={index} className="badge bg-info m-1">
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaTools className="fs-1 text-warning mb-3" />
              <Card.Title>Tools</Card.Title>
              <Card.Body>
                {skills.tools.map((skill, index) => (
                  <span key={index} className="badge bg-warning m-1">
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaStar className="fs-1 text-secondary mb-3" />
              <Card.Title>Soft skills</Card.Title>
              <Card.Body>
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="badge bg-secondary m-1">
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="skill-card h-100 text-center p-4">
              <FaGit className="fs-1 text-danger mb-3" />
              <Card.Title>Git</Card.Title>
              <Card.Body>
                {skills.git.map((skill, index) => (
                  <span key={index} className="badge bg-danger m-1">
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
