import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
    return(

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/home">R A J NOTES</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shared">Shared</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/deleted">Deleted</a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="d-flex justify-content-end nav-item">
              <a class="nav-link" href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    )


}

export default NavBar ;