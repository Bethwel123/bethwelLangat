import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://localhost/5000/blogPosts');
        const data = await response.json();
        console.log('Fetched data:', data);
        setPosts(data);
      } catch (error) {
        console.log('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="section">
        <Container className="text-center">
          <h2>Loading...</h2>
        </Container>
      </section>
    );
  }
  
  return (
    <section id="blog" className="section">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Recommended Picks</h2>
        <Row>
          {posts.map((post) => (
            <Col lg={4} md={6} className="mb-4" key={post.id}>
              <Card className="blog-card h-100">
                <Card.Img variant="top" src={post.image} className="blog-image" />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div className="meta-info mb-3">
                    <span className="category">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="tags mb-3">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="badge bg-primary me-2">{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="read-more-link"
                  >
                    Read Full Article <FaArrowRight className="ms-2" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
