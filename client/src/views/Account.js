import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Account(){
    const [haveUser, setHaveUser] = useState(true);
    return(
        <div className="account">
        { haveUser ?
            <SignIn /> :
            <SignUp />
        }
        <Button onClick={()=>{setHaveUser(true)}}>Sign In</Button>
        <Button onClick={()=>{setHaveUser(false)}}>Sign Up</Button>

        </div>
    );
}

export default Account;