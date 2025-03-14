import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../images/profile.jpg";

const About = () => {

    const personalInfo = {
      "name": "Bethwel Langat",
      "title": "Full Stack Software Developer",
      "email": "bethwellangat654@gmail.com",
      "phone": "+254 719218481",
      "location": "Nairobi, Kenya",
      "bio": "Passionate full stack developer with expertise in modern web technologies. Creating elegant solutions to complex problems. Always eager to learn and grow in a fast-paced environment."
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
                    <strong>Phone:</strong> {personalInfo.phone}{" "}
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
                  href={require("../Assets/Bethwel-Resume.pdf")}
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
