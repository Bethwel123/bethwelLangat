import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
// import { API_URL } from "../letConfig";

const Education = () => {

  const education = [
    {
      "id": 1,
      "degree": "Bachelor of Science in Computer Science",
      "institution": "KCS University",
      "duration": "2019 - 2023",
      "description": "Focused on software engineering principles and modern development practices.",
      "achievements": [
        "First Class Honours",
        "Best Final Year Project Award",
        "President of Computing Society"
      ]
    },
    {
      "id": 2,
      "degree": "Full Stack Web Development",
      "institution": "Tech Academy Bootcamp",
      "duration": "2023",
      "description": "Intensive program covering modern web development technologies and practices.",
      "achievements": [
        "Built 5 full-stack applications",
        "Awarded Best Team Project",
        "Perfect attendance record"
      ]
    }
  ]

  return (
    <section id="education" className="section">
      <Container>
        <h2 className="text-center mb-5">Education Journey</h2>
        <Row>
          {education.map((edu) => (
            <Col lg={6} className="mb-4" key={edu.id}>
              <Card className="education-card h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaGraduationCap className="education-icon me-3" />
                    <div>
                      <h4 className="mb-1">{edu.degree}</h4>
                      <h5 className="text-primary">{edu.institution}</h5>
                    </div>
                  </div>
                  <p className="text-muted mb-2">{edu.duration}</p>
                  <p className="mb-3">{edu.description}</p>
                  <div className="achievements">
                    {edu.achievements.map((achievement, index) => (
                      <div key={index} className="achievement-item">
                        • {achievement}
                      </div>
                    ))}
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

export default Education;