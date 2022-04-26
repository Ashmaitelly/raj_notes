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
                 <Nav.Link eventKey="link-1">Shared</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Deleted</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" >
                Log Out
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )


}

export default NavBar ;