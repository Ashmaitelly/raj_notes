import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



function Note(){
const TextSection= `text modified by user`;
    return(

  <Card style={{  height: '80%' , width: '75%', margin: '0 auto' }}>
    <Card.Body>
       <Card.Title>Note Title</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">Modified Date</Card.Subtitle>
       <Card.Text style={{  whiteSpace: "pre-wrap"}}> {TextSection}  </Card.Text>
    </Card.Body>
  </Card>
    )

}

export default Note ;