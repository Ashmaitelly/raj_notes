import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SignIn(){

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

    return (
      <div className="App">
        <div className="App-wrapper">
          <div>
            <h2 className="title">Sign Up</h2>
          </div>
          <form>
            
              <InputGroup className="mb-3">

                {/* adding the username to the sign up */}


              <div className="username">
                <InputGroup.Text id="Username">Username</InputGroup.Text>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="Username"
                  value={userName}
                  onChange={(e) => {setUserName(e.target.value)}}
                />
                </div>
                    <br/>

                    {/**adding the password to the sign-up */}
                <div className="password">
                <InputGroup.Text id="Password">Password</InputGroup.Text>
                <FormControl
                  type='password'
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="Password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                />
                </div>
                    <br/>
            </InputGroup>
          </form>
          <Button onClick={()=>{console.log(userName, password)}}>Submit</Button>
        </div>
      </div>
      );
    }
    
    export default SignIn;