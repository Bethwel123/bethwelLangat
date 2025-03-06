import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaStar,
  FaGit,
} from "react-icons/fa";
// import { API_URL } from "../letConfig";

const Skills = () => {
  const skills = {
        "frontend": ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Redux"],
        "backend": ["Node.js", "Flask", "Python", "Django", "RESTful APIs"],
        "database": ["PostgreSQL", "MySQL", "SQLite"],
        "tools": [
          "Git",
          "Docker",
          "VS Code",
          "Postman",
          "Heroku",
          "Vercel",
          "Render"
        ],
        "softSkills": [
          "Problem Solving",
          "Teamwork",
          "Communication",
          "Time Management",
          "Adaptability"
        ],
        "git": ["Git", "GitHub"]
      }


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
