import "./RegisterForm.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers, registerUser } from "../../server/users";

function RegisterForm(props) {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [enoughPassLength, setPassLength] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  let usernameCheck =
    /^[a-zA-Z0-9]([-_](?![-_])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      if (details.confirmPassword.length === 0) {
        setError(false);
      }
    } else if (form.checkValidity() && error && isValidUsername) {
      if (registerUser(details.username, details.password)) {
        setValidated(false);
        navigate("/login");
      }
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  function validatePasswords(password, confirmPassword) {
    if (password === confirmPassword) {
      setError(true);
    } else if (password !== confirmPassword) {
      setError(false);
      setValidated(false);
    }

    let decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

    if (password.length > 0) {
      if (password.match(decimal)) {
        setPassLength(true);
      } else {
        setPassLength(false);
      }
    } else {
      setPassLength(true);
    }
  }
  function validateUsername(username) {
    if (username.length > 0) {
      if (username.match(usernameCheck)) {
        setIsValidUsername(true);
      } else {
        setIsValidUsername(false);
      }
    } else {
      setIsValidUsername(true);
    }
  }
  useEffect(() => {
    validatePasswords(details.password, details.confirmPassword);
    validateUsername(details.username);
  }, [details]);

  let users = getAllUsers();
  let isUserTaken = users.find((user) => user.username === details.username);

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
          <Form.Group className="group-relative mb-3" controlId="formUsername">
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
            <span
              className="username-taken invalid-feedback test"
              style={{
                display: isUserTaken ? "none" : "block",
                visibility: !isUserTaken ? "hidden" : "visible",
              }}
            >
              Username is already taken
            </span>
            <span
              className="username-taken invalid-feedback test"
              style={{
                display: isValidUsername ? "none" : "block",
                visibility: isValidUsername ? "hidden" : "visible",
              }}
            >
              Username must start with a letter,be a minimum of three letters
              can only contain letters of the alphabet, "-","_" or "."
              characters.
            </span>
          </Form.Group>
          <Form.Group
            className="group-relative long-validation-text mb-3"
            controlId="formPassword"
          >
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
            <span
              className="username-taken invalid-feedback test long-test"
              style={{
                display: enoughPassLength ? "none" : "block",
                visibility: enoughPassLength ? "hidden" : "visible",
              }}
            >
              Password at least 8 characters which contain at least one
              lowercase letter, one uppercase letter, one numeric digit, and one
              special character
            </span>
          </Form.Group>
          <Form.Group
            className="group-relative mb-3"
            controlId="formConfirmPassword"
          >
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="password"
              placeholder="Type your password"
              required
              name="confirmPassword"
              onChange={handleChange}
              isInvalid={!error}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                display: !error && validated ? "block" : "none",
                visibility: !error ? "visible" : "hidden",
              }}
            >
              Passwords do not match
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            bsPrefix="custom-class-btn"
            variant="primary"
            type="submit"
            disabled={!enoughPassLength}
          >
            REGISTER
          </Button>
        </Form>
        <Link to="/login">Already have an account?Log in instead.</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
