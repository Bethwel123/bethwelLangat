import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { API_URL } from "../letConfig";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState({});

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch(`${API_URL}/testimonials`);
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);


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
