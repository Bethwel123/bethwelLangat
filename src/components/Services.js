import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaServer, FaTools, FaLaptopCode, FaRocket, FaLock } from 'react-icons/fa';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://localhost/5000/service');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log('Error fetching skills:', error);
      }
    };

    fetchServices();
  }, []);

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
                  {/* <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul> */}
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
