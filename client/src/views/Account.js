import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { useNavigate } from 'react-router-dom';


function Account(){
    const [haveUser, setHaveUser] = useState(true);

    const navigate =useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate("/home");
        }
    },[navigate]);

    return(
        
        <div className="Account" style={{}}>
            
            <div className='d-flex justify-content-center mt-5'>
                <Button style={{marginRight: "1%"}} onClick={()=>{setHaveUser(true)}}>Sign Up</Button>
                <Button onClick={()=>{setHaveUser(false)}}>Log In</Button>
            </div>
        { /**if else condition */}
        { haveUser ?
            <SignUp /> :
            <SignIn />
            
        }

        </div>
    );
}

export default Account;
//