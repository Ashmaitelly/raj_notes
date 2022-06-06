import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [haveUser, setHaveUser] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/home');
    }
    document.getElementById('signIn').click();
  }, [navigate]);

  return (
    <div className="sign App position-absolute top-50 start-50 translate-middle">
      <div>
        <Nav variant="tabs" defaultActiveKey="/home" justify="true">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              id="signIn"
              className={`btn ${
                haveUser ? 'btn-success' : 'btn-secondary'
              } signCol`}
              onClick={() => {
                setHaveUser(true);
              }}
            >
              Sign In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              className={`btn ${
                haveUser ? 'btn-secondary' : 'btn-success'
              } signCol`}
              onClick={() => {
                setHaveUser(false);
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        {/**if else condition */}
        {haveUser ? <SignIn /> : <SignUp />}
      </div>
      <div className="d-flex justify-content-center mt-5">
        {/* <Button
          className={`btn ${haveUser ? "btn-secondary" : "btn-success"}`}
          onClick={() => {
            setHaveUser(false);
          }}
        >
          Sign Up
        </Button>
        <Button
          className={`btn ${haveUser ? "btn-success" : "btn-secondary"}`}
          onClick={() => {
            setHaveUser(true);
          }}
        >
          Log In
        </Button> */}
      </div>
    </div>
  );
}

export default Account;
//
