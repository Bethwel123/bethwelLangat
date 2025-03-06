import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
// import { API_URL } from "../letConfig";

const Blog = () => {

  const blogPosts = [
    {
      "id": 1,
      "title": "Building a Simple Web Application Security Scanner with Python",
      "category": "Development",
      "readTime": "5 min read",
      "excerpt": "Learn best practices for building large-scale React applications with optimal performance.",
      "tags": ["Python", "Web Security", "Automation"],
      "date": "2024-01-15",
      "url": "https://www.freecodecamp.org/news/build-a-web-application-security-scanner-with-python/",
      "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      "id": 2,
      "title": "Modern CSS Techniques",
      "category": "Design",
      "readTime": "4 min read",
      "excerpt": "Exploring modern CSS features and techniques for better web design.",
      "tags": ["CSS", "Design", "Web Development"],
      "date": "2024-01-20",
      "url": "https://web.dev/articles/one-line-layouts",
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      "id": 3,
      "title": "Getting Started with Node.js",
      "category": "Backend",
      "readTime": "6 min read",
      "excerpt": "A comprehensive guide to building backend services with Node.js.",
      "tags": ["Node.js", "Backend", "JavaScript"],
      "date": "2024-01-25",
      "url": "https://nodejs.dev/en/learn/",
      "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];
  
  return (
    <section id="blog" className="section">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Recommended Picks</h2>
        <Row>
          {blogPosts.map((post) => (
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
