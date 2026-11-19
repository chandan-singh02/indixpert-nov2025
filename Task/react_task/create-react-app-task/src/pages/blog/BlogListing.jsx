import { Link, useSearchParams } from "react-router";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

import BlogPostData from "../../BlogPostData";
import BlogSearch from "../blog/BlogSearch";

function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  };

  const filteredBlogs = BlogPostData.filter((blog) => {
    const keyword = search.trim().toLowerCase();

    return (
      blog.title.toLowerCase().includes(keyword) ||
      blog.author.toLowerCase().includes(keyword) ||
      blog.category.toLowerCase().includes(keyword) ||
      blog.shortDescription.toLowerCase().includes(keyword)
    );
  });

  return (
    <Container
      fluid
      className="blog-container"
    >
      {/* Header */}
      <div className="blog-header text-center">
        <h2>DEV Blog</h2>
        <p>Explore articles, search topics, and learn React.</p>
      </div>

      {/* Search */}
      <div className="search-wrapper">
        <BlogSearch
          search={search}
          onSearch={handleSearch}
        />
      </div>

      {/* Search information */}
      {search && (
        <p className="search-info">
          Search results for: <strong>{search}</strong> ({filteredBlogs.length}{" "}
          blogs found)
        </p>
      )}

      {/* Blog Cards */}
      <Row className="g-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Col
              key={blog.id}
              xs={12}
              sm={6}
              lg={4}
            >
              <Card className="blog-card h-100">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  className="blog-card-image"
                />

                <Card.Body className="d-flex flex-column">
                  <Badge
                    bg="primary"
                    className="category-badge"
                  >
                    {blog.category}
                  </Badge>

                  <Card.Title>{blog.title}</Card.Title>

                  <div className="blog-meta">
                    By {blog.author} · {blog.date}
                  </div>

                  <Card.Text>{blog.shortDescription}</Card.Text>

                  <Button
                    as={Link}
                    to={`/blogs/${blog.id}`}
                    variant="outline-primary"
                    className="read-more mt-auto"
                  >
                    Read More →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="no-results text-center">
              <h4>No blogs found!</h4>
              <p>Try searching with another keyword.</p>
              <Button
                variant="primary"
                onClick={() => handleSearch("")}
              >
                Clear Search
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default BlogListing;
