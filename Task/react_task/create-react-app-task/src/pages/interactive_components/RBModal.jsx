import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";

function RBModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShow(false);
    setEmail("");
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Modal</h2>

      <div
        className="bg-secondary p-3"
        style={{ minHeight: "370px" }}
      >
        <Button
          variant="primary"
          onClick={handleShow}
        >
          <i className="bi bi-envelope me-2"></i>
          Subscribe
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          size="sm"
        >
          <Modal.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Modal.Title className="fs-5 fw-semibold">
                Don't miss out
              </Modal.Title>

              <CloseButton onClick={handleClose} />
            </div>

            <p className="small mb-3">
              Signup for our newsletter to stay up to date.
            </p>

            <Form onSubmit={handleSubscribe}>
              <div className="input-group">
                <Form.Control
                  type="email"
                  size="sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  variant="outline-secondary"
                  size="sm"
                >
                  Subscribe
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default RBModal;
