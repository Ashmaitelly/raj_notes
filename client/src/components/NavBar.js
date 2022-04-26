import React from "react";
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {

    return(

        <Nav
             activeKey="/home"
             onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link eventKey="Shared-Page">Shared</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Trash-Page">Deleted</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Logging-Out" >
                Log Out
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )


}

export default NavBar ;