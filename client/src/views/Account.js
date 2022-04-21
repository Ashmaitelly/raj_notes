import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Account(){
    return(
        <div classNAme="account">
        <SignUp />
        <SignIn />
        </div>
    );
}

export default Account;