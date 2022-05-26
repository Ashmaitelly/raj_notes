import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";

function Account() {
  const [haveUser, setHaveUser] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="Account">
      <div className="d-flex justify-content-center mt-5">
        <Button
          style={{ marginRight: "1%" }}
          className={`btn ${haveUser ? "btn-secondary" : "btn-primary"}`}
          onClick={() => {
            setHaveUser(false);
          }}
        >
          Sign Up
        </Button>
        <Button
          className={`btn ${haveUser ? "btn-primary" : "btn-secondary"}`}
          onClick={() => {
            setHaveUser(true);
          }}
        >
          Log In
        </Button>
      </div>
      <div>
        {/**if else condition */}
        {haveUser ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default Account;
//
