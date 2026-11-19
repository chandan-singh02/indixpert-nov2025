import { useParams, Link } from "react-router";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";

import BlogPostData from "../../BlogPostData";

function BlogDetails() {
  const { id } = useParams();

  const blog = BlogPostData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <Container className="text-center not-found">
        <h2>Blog Not Found!</h2>
        <p>The blog you are looking for does not exist.</p>
        <Button
          as={Link}
          to="/blogs"
        >
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <Container className="blog-details-container">
      <Button
        as={Link}
        to="/blogs"
        variant="outline-primary"
        className="mb-4"
      >
        <FaArrowLeft /> Back to Blogs
      </Button>

      <Row className="justify-content-center">
        <Col lg={10}>
          <img
            src={blog.image}
            alt={blog.title}
            className="detail-image"
          />

          <div className="detail-content">
            <Badge
              bg="primary"
              className="mb-3"
            >
              {blog.category}
            </Badge>

            <h1 className="detail-title">{blog.title}</h1>

            <div className="detail-meta">
              <span>
                <FaUser /> {blog.author}
              </span>

              <span>
                <FaCalendarAlt /> {blog.date}
              </span>
            </div>

            <hr />

            <div className="article-content">
              {blog.content
                .trim()
                .split("\n")
                .filter((line) => line.trim())
                .map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
            </div>

            <hr />

            <Button
              as={Link}
              to="/blogs"
              variant="primary"
            >
              Explore More Blogs
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogDetails;
