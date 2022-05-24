import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    if (password === confirmPassword && username && password) {
      Axios.post("http://localhost:3001/signup", { username, password })
        .then((response) => {
          alert("User sucussefully created");
          localStorage.setItem("user", response.data);
          navigate("/home");
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else {
      if( password !==confirmPassword ) {
        alert("Passwords don't match");
      }
      if( !password ) {
        alert("Please enter a password")
      }
      if (!username) {
        alert('Please enter a username1')
      }
    }
  };

  return (
    <div className="App position-absolute top-50 start-50 translate-middle">
      <div className="App-wrapper">
        <div>
          <h2 className="title">Sign Up</h2>
        </div>
        <div>
          <Form
            onSubmit={(e) => {
              createUser(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
