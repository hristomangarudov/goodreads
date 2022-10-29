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
  };
  function validatePasswords(password, confirmPassword) {
    if (password === confirmPassword) {
      setError(true);
      console.log(error);
    } else if (password !== confirmPassword) {
      console.log(details.password, details.confirmPassword);
      setError(false);
      console.log(error);
    }

    let decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

      if(password.length > 0){

        if (password.match(decimal)) {
          setPassLength(true);
        } else {
          setPassLength(false);
        }
      } else {
        setPassLength(true);

      }

    console.log(password.length);

  }
  useEffect(() => {
    validatePasswords(
      details.password,
      details.confirmPassword,
      details.username
    );
  }, [details]);

  let users = getAllUsers();
  const isUserTaken = users.find((user) => user.username === details.username);

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

            <span
              className="username-taken"
              style={{ display: isUserTaken ? "block" : "none" }}
            >
              Username is already taken
            </span>
            <div className="feedback-container">
              <p>{validated? "Please enter a username":""}</p>
            </div>
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
            <span
              className="username-taken"
              style={{ display: enoughPassLength ? "none" : "block" }}
            >
              Password between 8 to 15 characters which contain at least one
              lowercase letter, one uppercase letter, one numeric digit, and one
              special character
            </span>
            <div className="feedback-container">
              <p>{validated? "Please enter a password":""}</p>
            </div>
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
              isInvalid={!error}
            />
            <div className="feedback-container">
              <p>{validated? "Passwords do not match":""}</p>
            </div>
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
