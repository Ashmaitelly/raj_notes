import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Account(){
    const [haveUser, setHaveUser] = useState(true);
    return(
        <div className="account">
               <Button onClick={()=>{setHaveUser(true)}}>Log In</Button>
        <Button onClick={()=>{setHaveUser(false)}}>Sign Up</Button>

        { haveUser ?
            <SignIn /> :
            <SignUp />
        }

        </div>
    );
}

export default Account;