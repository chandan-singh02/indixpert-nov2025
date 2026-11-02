import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function RBSpinners() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
  };

  const handleCancel = () => {
    setSubmitting(false);
  };

  return (
    <div className="component-page">
      <h1 className="component-title">Spinners</h1>

      <div className="d-flex gap-2">
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting && (
            <Spinner
              animation="border"
              size="sm"
              className="me-2"
            />
          )}

          {submitting ? "Submitting..." : "Submit"}
        </Button>

        <Button
          variant="danger"
          onClick={handleCancel}
          disabled={!submitting}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default RBSpinners;
