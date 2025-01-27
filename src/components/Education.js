import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
// import educationData from '../db.json';

const Education = () => {
  const [education, setEducation ] = useState({});

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('http://localhost:5000/education');
        const data = await response.json();
        setEducation(data);
      } catch (error) {
        console.log('Error fetching skills:', error);
      }
    };

    fetchEducation();
  }, []);

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