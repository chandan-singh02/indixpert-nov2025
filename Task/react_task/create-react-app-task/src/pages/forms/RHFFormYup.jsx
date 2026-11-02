import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const today = new Date().toISOString().split("T")[0];

const defaultValues = {
  firstName: "kj",
  lastName: "singh",
  age: 40,
  password: "Pass123",
  phoneNumber: "9876543210",
  email: "kj@gmail.com",
  country: "India",
  state: "Gujarat",
  cities: ["Ahmedabad", "Surat"],
  address: "Ahmedabad, Gujarat, India",
  zipCode: "380001",
  joiningDate: "2026-10-29",
  gender: "Male",
  hobbies: ["tv show", "playing games"],
  profilePicture: undefined,
  resume: undefined,
  terms: false,
};

const emptyValues = {
  firstName: "",
  lastName: "",
  age: "",
  password: "",
  phoneNumber: "",
  email: "",
  country: "",
  state: "",
  cities: [],
  address: "",
  zipCode: "",
  joiningDate: "",
  gender: "",
  hobbies: [],
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

const imageTypes = ["image/jpeg", "image/png", "image/gif"];

const resumeTypes = ["application/pdf", "application/msword"];

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),

  lastName: yup.string().required("Last name is required"),

  age: yup
    .number()
    .typeError("Age is required")
    .required("Age is required")
    .min(18, "Minimum age is 18")
    .max(40, "Maximum age is 40"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(10, "Maximum 10 characters")
    .matches(/^\S+$/, "Spaces are not allowed"),

  phoneNumber: yup.string().required("Phone number is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid email address"
    ),

  country: yup.string().required("Country is required"),

  state: yup.string().required("State is required"),

  cities: yup
    .array()
    .of(yup.string())
    .min(2, "Select minimum two cities")
    .required("Cities are required"),

  address: yup.string().required("Address is required"),

  zipCode: yup.string().required("Zip code is required"),

  joiningDate: yup
    .string()
    .required("Joining date is required")
    .test("past-date", "Date must be less than current date", (value) =>
      Boolean(value && value < today)
    ),

  gender: yup.string().required("Gender is required"),

  hobbies: yup
    .array()
    .of(yup.string())
    .min(2, "Select minimum two hobbies")
    .required("Hobbies are required"),

  profilePicture: yup
    .mixed()
    .test(
      "required",
      "Profile picture is required",
      (files) => files?.length > 0
    )
    .test(
      "fileType",
      "Only JPG, PNG or GIF allowed",
      (files) => !files?.length || imageTypes.includes(files[0].type)
    )
    .test(
      "fileSize",
      "Maximum image size is 6MB",
      (files) => !files?.length || files[0].size <= 6 * 1024 * 1024
    ),

  resume: yup
    .mixed()
    .test("required", "Resume is required", (files) => files?.length > 0)
    .test(
      "fileType",
      "Only PDF or Word document allowed",
      (files) => !files?.length || resumeTypes.includes(files[0].type)
    )
    .test(
      "fileSize",
      "Maximum resume size is 8MB",
      (files) => !files?.length || files[0].size <= 8 * 1024 * 1024
    ),

  terms: yup.boolean().oneOf([true], "Please accept terms and conditions"),
});

const RHFFormYup = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
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
    console.log("Submitted Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Form submitted successfully!");

    reset(emptyValues);
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
                <Form.Control {...register("firstName")} />
                <small className="text-danger">
                  {errors.firstName?.message}
                </small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control {...register("lastName")} />
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
                  {...register("age", { valueAsNumber: true })}
                />
                <small className="text-danger">{errors.age?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password")}
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
                  {...register("phoneNumber")}
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
                  {...register("email")}
                />
                <small className="text-danger">{errors.email?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Country</Form.Label>
                <Form.Select {...register("country")}>
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

            {/* State */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select State</Form.Label>
                <Form.Select {...register("state")}>
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
                  {...register("cities")}
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

            {/* Address */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Your Complete Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("address")}
                />
                <small className="text-danger">{errors.address?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Zip/Pin Code</Form.Label>
                <Form.Control {...register("zipCode")} />
                <small className="text-danger">{errors.zipCode?.message}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                  type="date"
                  max={today}
                  {...register("joiningDate")}
                />
                <small className="text-danger">
                  {errors.joiningDate?.message}
                </small>
              </Form.Group>
            </Col>

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
                    {...register("gender")}
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
                    {...register("hobbies")}
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
                  {...register("profilePicture")}
                />
                <small className="text-danger">
                  {errors.profilePicture?.message}
                </small>
              </Form.Group>
            </Col>

            {/* Resume */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("resume")}
                />
                <small className="text-danger">{errors.resume?.message}</small>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                {...register("terms")}
              />
              <small className="text-danger">{errors.terms?.message}</small>
            </Col>
          </Row>

          {/* Submit Button */}
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

export default RHFFormYup;
