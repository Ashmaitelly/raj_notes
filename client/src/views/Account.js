import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';


function Account(){
    const [haveUser, setHaveUser] = useState(true);
    return(
        <div className="Account" style={{}}>
            <div className='d-flex justify-content-center'>
                <Button  style={{marginRight: "2%"}} onClick={()=>{setHaveUser(true)}}>Log In</Button>
                <Button onClick={()=>{setHaveUser(false)}}>Sign Up</Button>
            </div>
    { /**if else condition */}
        { haveUser ?
            <SignIn /> :
            <SignUp />
        }

        </div>
    );
}

export default Account;
//