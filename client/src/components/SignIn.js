import React, { useState } from "react";
import {Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function SignIn() {
  const navigate= useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) =>{
    e.preventDefault();
    Axios.get("http://localhost:3001/signin",{params: {username :username, password: password}})
    .then((response) =>{
      alert(response.data);
      navigate("/home");
    })
    .catch((error) => {
      alert(error.response.data);
    })
  };

  return (
    <div className="App" class="position-absolute top-50 start-50 translate-middle">
      <div className="App-wrapper">
        <div>
          <h2 className="title">Sign In</h2>
        </div>
        <div>
          <Form onSubmit={(e)=>{signin(e)}}> 
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e)=>{signin(e)}}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
