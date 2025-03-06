// import React, { useState, useEffect} from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Testimonials = () => {
  // const [testimonials, setTestimonials] = useState({});

  const testimonials = [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "role": "Project Manager at TechCorp",
      "text": "Working with this developer was an excellent experience. They delivered high-quality code and met all deadlines.",
      "image": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "id": 2,
      "name": "Michael Chen",
      "role": "CEO at StartupX",
      "text": "Outstanding technical skills and great communication. Would definitely work with them again.",
      "image": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "id": 3,
      "name": "Emma Davis",
      "role": "Lead Developer at InnovateTech",
      "text": "Their attention to detail and problem-solving abilities are impressive. A true professional.",
      "image": "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ]
  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     const response = await fetch(`http://localhost:5555/testimonials`);
  //     const data = await response.json();
  //     setTestimonials(data);
  //   };

  //   fetchTestimonials();
  // }, []);


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
