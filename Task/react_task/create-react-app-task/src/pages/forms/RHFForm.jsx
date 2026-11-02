import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const today = new Date().toISOString().split("T")[0];

const defaultValues = {
  firstName: "kj",
  lastName: "singh",
  age: 40,
  password: "Pass123",
  phoneNumber: "9876543210",
  email: "kj@gmail.com",
  country: "India",
  state: "uttrakhand",
  cities: ["bageshwar", "haldwani", "dehradun"],
  address: "bageshwar, uttrakhand, India",
  zipCode: "263642",
  joiningDate: "2026-10-29",
  gender: "Male",
  hobbies: ["tv shows", "playing"],
  profilePicture: undefined,
  resume: undefined,
  terms: false,
};

const locations = {
  India: {
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Delhi: ["New Delhi", "Dwarka"],
    Uttarakhand: ["Haldwani", "Dehradun"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Dallas"],
  },
};

const RHFForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  const selectedCountry = watch("country");
  const selectedState = watch("state");

  const states = Object.keys(locations[selectedCountry] || {});

  const cities = locations[selectedCountry]?.[selectedState] || [];

  useEffect(() => {
    if (!states.includes(selectedState)) {
      setValue("state", "");
      setValue("cities", []);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const selectedCities = watch("cities") || [];

    setValue(
      "cities",
      selectedCities.filter((city) => cities.includes(city))
    );
  }, [selectedState]);

  const onSubmit = async (data) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Form submitted successfully!");

    reset(defaultValues);
  };

  return (
    <Container className="my-4">
      <h3 className="mb-4">Registration Details</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>

                <Form.Control
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />

                <small className="text-danger">
                  {errors.firstName?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>

                <Form.Control
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />

                <small className="text-danger">
                  {errors.lastName?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>

                <Form.Control
                  type="number"
                  {...register("age", {
                    required: "Age is required",
                    valueAsNumber: true,
                    min: {
                      value: 18,
                      message: "Minimum age is 18",
                    },
                    max: {
                      value: 40,
                      message: "Maximum age is 40",
                    },
                  })}
                />

                <small className="text-danger">{errors.age?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum 10 characters",
                    },
                    pattern: {
                      value: /^\S+$/,
                      message: "Spaces are not allowed",
                    },
                  })}
                />

                <small className="text-danger">
                  {errors.password?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>

                <Form.Control
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                />

                <small className="text-danger">
                  {errors.phoneNumber?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>

                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                />

                <small className="text-danger">{errors.email?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Country</Form.Label>

                <Form.Select
                  {...register("country", {
                    required: "Country is required",
                  })}
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

                <small className="text-danger">{errors.country?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select State</Form.Label>

                <Form.Select
                  {...register("state", {
                    required: "State is required",
                  })}
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

                <small className="text-danger">{errors.state?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Preferred Cities</Form.Label>

                <Form.Select
                  multiple
                  style={{ height: "100px" }}
                  {...register("cities", {
                    validate: (value) =>
                      value?.length >= 2 || "Select minimum two cities",
                  })}
                >
                  {cities.map((city) => (
                    <option
                      key={city}
                      value={city}
                    >
                      {city}
                    </option>
                  ))}
                </Form.Select>

                <small className="text-danger">{errors.cities?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Your Complete Address</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("address", {
                    required: "Address is required",
                  })}
                />

                <small className="text-danger">{errors.address?.message}</small>
              </Form.Group>
            </Col>

            {/* Zip Code */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Zip/Pin Code</Form.Label>

                <Form.Control
                  {...register("zipCode", {
                    required: "Zip code is required",
                  })}
                />

                <small className="text-danger">{errors.zipCode?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>

                <Form.Control
                  type="date"
                  max={today}
                  {...register("joiningDate", {
                    required: "Joining date is required",
                    validate: (value) =>
                      value < today || "Date must be less than current date",
                  })}
                />

                <small className="text-danger">
                  {errors.joiningDate?.message}
                </small>
              </Form.Group>
            </Col>

            {/* Gender */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="d-block">Gender</Form.Label>

                {["Male", "Female", "Transgender"].map((gender) => (
                  <Form.Check
                    inline
                    type="radio"
                    label={gender}
                    value={gender}
                    key={gender}
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  />
                ))}

                <small className="text-danger d-block">
                  {errors.gender?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="d-block">Hobbies</Form.Label>

                {["Drawing", "Singing", "Dancing"].map((hobby) => (
                  <Form.Check
                    inline
                    type="checkbox"
                    label={hobby}
                    value={hobby}
                    key={hobby}
                    {...register("hobbies", {
                      validate: (value) =>
                        value?.length >= 2 || "Select minimum two hobbies",
                    })}
                  />
                ))}

                <small className="text-danger d-block">
                  {errors.hobbies?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>

                <Form.Control
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  {...register("profilePicture", {
                    validate: {
                      required: (files) =>
                        files?.length > 0 || "Profile picture is required",

                      fileType: (files) =>
                        !files?.length ||
                        ["image/jpeg", "image/png", "image/gif"].includes(
                          files[0].type
                        ) ||
                        "Only JPG, PNG or GIF allowed",

                      fileSize: (files) =>
                        !files?.length ||
                        files[0].size <= 6 * 1024 * 1024 ||
                        "Maximum size is 6MB",
                    },
                  })}
                />

                <small className="text-danger">
                  {errors.profilePicture?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Resume</Form.Label>

                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("resume", {
                    validate: {
                      required: (files) =>
                        files?.length > 0 || "Resume is required",

                      fileType: (files) =>
                        !files?.length ||
                        [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ].includes(files[0].type) ||
                        "Only PDF or Word document allowed",

                      fileSize: (files) =>
                        !files?.length ||
                        files[0].size <= 8 * 1024 * 1024 ||
                        "Maximum size is 8MB",
                    },
                  })}
                />

                <small className="text-danger">{errors.resume?.message}</small>
              </Form.Group>
            </Col>

            {/* Terms */}
            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                {...register("terms", {
                  validate: (value) =>
                    value === true || "Please accept terms and conditions",
                })}
              />

              <small className="text-danger">{errors.terms?.message}</small>
            </Col>
          </Row>

          <Button
            type="submit"
            className="mt-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </Button>
        </fieldset>
      </Form>

      <ToastContainer position="top-right" />
    </Container>
  );
};

export default RHFForm;
