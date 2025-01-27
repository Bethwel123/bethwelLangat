import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import testimonialData from '../db.json';

const Testimonials = () => {
  const { testimonials } = testimonialData;

  return (
    <section id="testimonials" className="section">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Client Testimonials</h2>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial-content text-center">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-3" />
                <p className="testimonial-text">{testimonial.text}</p>
                <h5>{testimonial.name}</h5>
                <p className="role">{testimonial.role}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
