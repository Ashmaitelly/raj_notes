import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    //prevent
    e.preventDefault();

    Axios.get("http://localhost:3001/signin", {
      params: { username: username, password: password },
    })
      .then((response) => {
        localStorage.setItem("user", response.data);
        navigate("/home");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <div
      className="sign App position-absolute top-50 start-50 translate-middle"
    >
      <div className="App-wrapper">
        <div>
          <h2 style={{ color: "green" }} className="title">
            Sign In
          </h2>
        </div>
        <div>
          <Form
            onSubmit={(e) => {
              signin(e);
            }}
          >
            <Form.Group className="mb-4 mt-4" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
