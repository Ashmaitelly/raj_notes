import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SignUp(){

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

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
                <InputGroup.Text id="Username">Username:</InputGroup.Text>
                <br/>
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
                <InputGroup.Text id="Password">Password:</InputGroup.Text>
                <br/>
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

                    {/**adding the confirm password to the sign-up */}
                <div className="confirm Password">
                <InputGroup.Text id="confirm Password">Confirm Password:</InputGroup.Text>
                <br/>
                <FormControl
                  type='password'
                  placeholder="confirm Password"
                  aria-label="confirm Password"
                  aria-describedby="confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
                </div>
                <br/>
            </InputGroup>
          </form>
          <Button onClick={()=>{console.log(userName, password, confirmPassword)}}>Sign Up</Button>
        </div>
      </div>
      );
    }
    
    export default SignUp;