import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
function LoginForm(props) {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();

    try {
      login(state);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  function login(userLogIn) {
    //Може би типът данни на props.users не е това което очакваме
    let changeDataType = Array.from(props.users);

    let currentUser = changeDataType.find(
      (user) =>
        user.email === userLogIn.email && user.password === userLogIn.password
    );
    console.log(currentUser);

    if (currentUser) {
      props.updateActive(userLogIn);
    } else {
      throw new Error("Invalid Login");
    }
  }

  return (
    <div className="credentials-wrapper">
      <div className="form-container">
        <div className="loginText">
          <h1>
            <strong> Login</strong>
          </h1>
          {/* <h1>Login</h1> */}
        </div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ width: 400 }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={styles.formControl}
              type="email"
              placeholder="Type your email"
              required
              name="email"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Type your Password"
              required
              name="password"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input a password
            </Form.Control.Feedback>
          </Form.Group>
          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
          <Link to="/register">Don't have an account?Register instead.</Link>
      </div>
    </div>
  );
}

export default LoginForm;
