import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
  function login (userLogIn) {
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
  };

  return (
    <div>
      <div className="form-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:400}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input a password
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <Link to="/register">Don't have an account?Register instead.</Link>
    </div>
  );
}

export default LoginForm;
