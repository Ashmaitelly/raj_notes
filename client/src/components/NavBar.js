import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav
      style={{ position: "sticky", top: "0", zIndex: "3" }}
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <a className="navbar-brand" href="/home">
        R A J NOTES
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shared">
              Shared
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/deleted">
              Deleted
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="d-flex justify-content-end nav-item">
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={logOut}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
