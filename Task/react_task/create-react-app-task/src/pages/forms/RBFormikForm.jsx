import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),

  lastName: Yup.string().required("Last name is required"),

  username: Yup.string().required("Username is required"),

  city: Yup.string().required("City is required"),

  state: Yup.string().required("State is required"),

  zip: Yup.string()
    .matches(/^[0-9]{6}$/, "Enter a valid 6-digit ZIP code")
    .required("ZIP is required"),

  file: Yup.mixed().required("Please select a file"),

  agree: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

function RBFormikForm() {
  return (
    <div className="container mt-4">
      <h4 className="mb-4">Formik Form Validation</h4>

      <Formik
        initialValues={{
          firstName: "kj",
          lastName: "singh",
          username: "killjoy__02",
          city: "bageshwar",
          state: "uttrakhand",
          zip: "263642",
          file: null,
          agree: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted Successfully:", values);

          console.log("Form Data Object:", {
            ...values,
            file: values.file ? values.file.name : null,
          });

          alert("Form submitted successfully!");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.firstName && !!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.lastName && !!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>

                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>

                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.username && !!errors.username}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={5}>
                <Form.Group>
                  <Form.Label>City</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.city && !!errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label>State</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.state && !!errors.state}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.zip && !!errors.zip}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>File</Form.Label>

              <Form.Control
                type="file"
                name="file"
                onChange={(event) =>
                  setFieldValue("file", event.currentTarget.files[0] || null)
                }
                onBlur={handleBlur}
                isInvalid={touched.file && !!errors.file}
              />

              <Form.Control.Feedback type="invalid">
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                name="agree"
                checked={values.agree}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.agree && !!errors.agree}
                feedback={errors.agree}
                feedbackType="invalid"
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
            >
              Submit form
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RBFormikForm;
