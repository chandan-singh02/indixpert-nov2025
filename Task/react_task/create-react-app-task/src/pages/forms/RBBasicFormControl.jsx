import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const RBBasicFormControls = () => {
  const [formData, setFormData] = useState({
    firstName: "kj",
    lastName: "singh",
    phoneNumber: "9876543210",
    emailAddress: "killjoy@gmail.com",
    country: "India",
    state: "Uttarakhand",
    city: "Bageshwar",
    zipCode: "263642",
    address: "Bageshwar, Uttarakhand",
    favouriteColor: "#0000ff",
    joiningDate: "2026-10-29",
    age: 40,
    gender: "Male",
    hobbies: ["Tv shows", "playing games"],
    resume: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const locations = {
    India: {
      states: {
        Uttarakhand: ["Haldwani", "Dehradun", "Bageshwar"],
        Delhi: ["New Delhi", "Dwarka"],
        UttarPradesh: ["Bareilly", "Lucknow", "Noida"],
      },
    },

    USA: {
      states: {
        California: ["Los Angeles", "San Francisco"],
        Texas: ["Houston", "Dallas"],
      },
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountry = (e) => {
    setFormData((prev) => ({
      ...prev,
      country: e.target.value,
      state: "",
      city: "",
    }));
  };

  const handleState = (e) => {
    setFormData((prev) => ({
      ...prev,
      state: e.target.value,
      city: "",
    }));
  };

  const handleHobbies = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const updatedHobbies = checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((hobby) => hobby !== value);

      return {
        ...prev,
        hobbies: updatedHobbies,
      };
    });
  };

  const handleResume = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0]?.name || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Submitted Data:", formData);
  };

  const states = formData.country
    ? Object.keys(locations[formData.country]?.states || {})
    : [];

  // Get Cities
  const cities = formData.state
    ? locations[formData.country]?.states[formData.state] || []
    : [];

  return (
    <Container className="my-4">
      <h4 className="mb-4">Registration Details (RB Basic Form Controls)</h4>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>

              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>

              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select Country</Form.Label>

              <Form.Select
                name="country"
                value={formData.country}
                onChange={handleCountry}
              >
                <option value="">Select country</option>

                {Object.keys(locations).map((country) => (
                  <option
                    key={country}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select State</Form.Label>

              <Form.Select
                name="state"
                value={formData.state}
                onChange={handleState}
                disabled={!formData.country}
              >
                <option value="">Select state</option>

                {states.map((state) => (
                  <option
                    key={state}
                    value={state}
                  >
                    {state}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select City</Form.Label>

              <Form.Select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
              >
                <option value="">Select city</option>

                {cities.map((city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Zip/Pin Code</Form.Label>

              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Your Address</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Favourite Color</Form.Label>

              <Form.Control
                type="color"
                name="favouriteColor"
                value={formData.favouriteColor}
                onChange={handleChange}
                style={{ width: "60px", height: "40px" }}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Joining Date</Form.Label>

              <Form.Control
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Age: {formData.age}</Form.Label>

              <Form.Range
                min="18"
                max="60"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="d-block">Gender</Form.Label>

              {["Male", "Female", "Transgender"].map((gender) => (
                <Form.Check
                  inline
                  key={gender}
                  type="radio"
                  label={gender}
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                />
              ))}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="d-block">Hobbies</Form.Label>

              {["Drawing", "Singing", "Dancing"].map((hobby) => (
                <Form.Check
                  inline
                  key={hobby}
                  type="checkbox"
                  label={hobby}
                  value={hobby}
                  checked={formData.hobbies.includes(hobby)}
                  onChange={handleHobbies}
                />
              ))}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>

              <Form.Control
                type="file"
                onChange={handleResume}
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          type="submit"
          variant="primary"
        >
          Submit Form
        </Button>
      </Form>

      {submittedData && (
        <div className="mt-4">
          <h5>Submitted Form Data</h5>

          <pre
            className="bg-light border rounded p-3"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </Container>
  );
};

export default RBBasicFormControls;
