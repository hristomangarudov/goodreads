import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../server/users";

function RegisterForm(props) {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
    } else if (form.checkValidity() && error) {
      if (registerUser(details.username, details.password)) {
        navigate("/login");
        setValidated(false);
      }
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    validatePasswords();
  };
  function validatePasswords() {
    if (details.confirmPassword === details.password) {
      setError(false);
    } else {
      console.log(details.password, details.confirmPassword);
      setError(true);
    }
  }
  return (
    <div className="credentials-wrapper">
      <div className="form-container">
        <h1>
          <strong> Register</strong>
        </h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ width: 400 }}
        >
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="text"
              placeholder="Type your username"
              required
              name="username"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid username
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="password"
              placeholder="Type your password"
              required
              name="password"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input a password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="password"
              placeholder="Type your password"
              required
              name="confirmPassword"
              onChange={handleChange}
              isInvalid={error}
            />
            <Form.Control.Feedback type="invalid">
              Passwords do not match
            </Form.Control.Feedback>
          </Form.Group>
          <Button bsPrefix="custom-class-btn" variant="primary" type="submit">
            REGISTER
          </Button>
        </Form>
        <Link to="/login">Already have an account?Log in instead.</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
