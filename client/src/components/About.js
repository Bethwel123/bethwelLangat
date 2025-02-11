import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../images/profile.jpg";
// import { API_URL } from "../letConfig";

const About = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      setLoading(false);
      try {
        const response = await fetch(`http://localhost:5555/personalInfo`);
        const data = await response.json();
        setPersonalInfo(data);
      } catch (error) {
        console.log('Error fetching personal info:', error);
      }
    };

    fetchPersonalInfo();
  }, []);

  if (loading) {
    return (
      <section id="about" className="section">
        <Container className="text-center">
          <h2>Loading...</h2>
        </Container>
      </section>
    )
  }

  return (
    <section id="about" className="section">
      {" "}
      <Container>
        {" "}
        <Row className="align-items-center">
          {" "}
          <Col lg={6} className="mb-4 mb-lg-0">
            {" "}
            <Image
              src={profile}
              alt={personalInfo.name}
              fluid
              rounded
              className="shadow-lg w-50 mx-auto d-block"
            />{" "}
          </Col>{" "}
          <Col lg={6}>
            {" "}
            <div className="ps-lg-4 ">
              {" "}
              <h2 className="mb-4">About Me</h2>{" "}
              <p className="lead mb-4">{personalInfo.bio}</p>{" "}
              <div className="mb-4">
                {" "}
                <h5 className="mb-3">Quick Facts</h5>{" "}
                <ul className="list-unstyled">
                  {" "}
                  <li className="mb-2">
                    {" "}
                    <strong>Name:</strong> {personalInfo.name}{" "}
                  </li>{" "}
                  <li className="mb-2">
                    {" "}
                    <strong>Location:</strong> {personalInfo.location}{" "}
                  </li>{" "}
                  <li className="mb-2">
                    {" "}
                    <strong>Email:</strong> {personalInfo.email}{" "}
                  </li>{" "}
                  <li className="mb-2">
                    {" "}
                    <strong>Role:</strong> {personalInfo.title}{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="d-flex gap-3">
                {" "}
                <a
                  href="/resume.pdf"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Download Resume{" "}
                </a>{" "}
                <a href="#contact" className="btn btn-outline-primary">
                  {" "}
                  Let's Talk{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </section>
  );
};

export default About;
