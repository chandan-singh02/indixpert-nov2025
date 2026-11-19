import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function BlogSearch({ search, onSearch }) {
  return (
    <InputGroup className="blog-search">
      <Form.Control
        type="search"
        placeholder="Enter keyword to search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default BlogSearch;
