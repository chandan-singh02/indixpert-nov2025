import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";

import CompanyDropdown from "./CompanyDropdown";

function RBNavbarOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Navbar & Offcanvas</h2>

      <Navbar
        expand="lg"
        bg="light"
        className="border rounded px-3"
      >
        <Container fluid>
          <Navbar.Brand
            href="#home"
            className="bg-dark text-white fw-bold px-2 py-1 me-3"
          >
            RB
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto align-items-lg-center">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#services">Services</Nav.Link>

              <CompanyDropdown
                title="Company"
                items={[
                  {
                    label: "About Us",
                    href: "#about",
                  },
                  {
                    label: "Our Team",
                    href: "#team",
                  },
                  {
                    label: "Infrastructure",
                    href: "#infrastructure",
                  },
                  {
                    label: "Testimonials",
                    href: "#testimonials",
                  },
                ]}
              />

              <CompanyDropdown
                title="Resources"
                items={[
                  {
                    label: "Blog",
                    href: "#blog",
                  },
                  {
                    label: "Careers",
                    href: "#careers",
                  },
                  {
                    label: "FAQs",
                    href: "#faqs",
                  },
                ]}
              />
            </Nav>

            <Nav className="align-items-lg-center gap-2 mt-3 mt-lg-0">
              <Button variant="primary">Login</Button>

              <Button variant="outline-primary">Sign Up</Button>

              <Button
                variant="dark"
                onClick={handleShow}
              >
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>

          <CloseButton onClick={handleClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h5 className="fw-bold mb-3">We are here to help you!</h5>

          <hr />

          <h6 className="fw-bold">Indixpert</h6>

          <p className="text-secondary mb-2">
            <i className="bi bi-globe me-2"></i>
            Our Offices:
          </p>

          <p className="small mb-1">1: Hyderabad, Telangana, India</p>

          <p className="small mb-3">2: Gurugram, Haryana, India</p>

          <p className="text-secondary mb-1">
            <i className="bi bi-envelope me-2"></i>
            Email
          </p>

          <p className="small mb-3">contact@indixpert.com</p>

          <p className="text-secondary mb-1">
            <i className="bi bi-phone me-2"></i>
            Phone
          </p>

          <p className="small">(+91) 778 899 2897</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default RBNavbarOffcanvas;
