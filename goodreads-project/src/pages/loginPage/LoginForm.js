import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../server/users";

function LoginForm(props) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginUser(username, password)) {
      props.successLogin();
      navigate("/home");
      setCredentials(true);
      setValidated(false);
    } else {
      if (username && password) {
        setCredentials(false);
        setValidated(false);
      } else {
        setCredentials(true);
        setValidated(true);
      }

      // setCredentials(false);
    }
  };
  return (
    <div className="credentials-wrapper">
      <div className="form-container">
        <div className="loginText">
          <h1>
            <strong> Login</strong>
          </h1>
        </div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ width: 400 }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="text"
              placeholder="Type your username"
              required
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              bsPrefix="custom-class-input"
              type="password"
              placeholder="Type your password"
              required
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="username-taken"
              style={{ display: credentials ? "none" : "block" }}
            >
              Wrong username or password
            </span>
            <Form.Control.Feedback type="invalid">
              Please input a password
            </Form.Control.Feedback>
          </Form.Group>
          <Button bsPrefix="custom-class-btn" variant="primary" type="submit">
            <strong>LOGIN</strong>
          </Button>
        </Form>
        <Link to="/register">Don't have an account?Register instead.</Link>
      </div>
    </div>
  );
}

export default LoginForm;
