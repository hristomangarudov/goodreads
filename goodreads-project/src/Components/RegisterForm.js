import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function RegisterForm(props) {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    email: "",
    username: "",
    password: ""
  })
  const navigate = useNavigate()
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
      addUser(state)
      navigate('/login')
    } catch (error) {
      alert(error.message)
    } finally {
      form.reset()
    }

  };
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
  const addUser = (newUser) => {

    //Може би типът данни на props.users не е това което очакваме 
    let changeDataType = Array.from(props.users)

    let isThereSuchUser = changeDataType.some((user) => user.email === newUser.email);
    
    if (isThereSuchUser) {
      throw new Error("User with given email already exists");
    } else {
      props.updateUsers(newUser)
    }
  };

  return (
    <div className='credentials-wrapper'>
      <div className='form-container'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:400}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required name="email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" required name="username" onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a valid username
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required name="password" onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Please input a password
            </Form.Control.Feedback>

          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>

        </Form>
      </div>
      <Link to="/login">Already have an account?Log in instead.</Link>
    </div>


  );
}

export default RegisterForm;
