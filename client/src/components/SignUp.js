import React, {useState} from 'react';
import {Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignUp(){
const navigate= useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

    return (
      <div className="App" class="position-absolute top-50 start-50 translate-middle">
        <div className="App-wrapper">
          <div>
            <h2 className="title" >Sign Up</h2>
          </div>
          <div>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
            </Form.Group>

            <Button variant="primary" onClick={()=>{navigate("/home")}}>
              Submit
            </Button>
          </Form>
          </div>
        </div>
      </div>
      );
    }
    export default SignUp;

