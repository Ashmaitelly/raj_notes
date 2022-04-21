import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function SignUp(){

    return (
      <div className="App">
        <div className="App-wrapper">
          <div>
            <h2 className="title">Sign Up</h2>
          </div>
          <form>
            <div className="name">
              <label className="labelN">Username</label>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            </div>
            <div className="password">
              <label className="labelP">Password</label>
              <InputGroup className="mb-3">
              <InputGroup.Password id="basic-addon1"></InputGroup.Password>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            </div>
          </form>
        </div>
      </div>
      );
    }
    
    export default SignUp;