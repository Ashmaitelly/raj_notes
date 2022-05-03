import React from "react";
import {Card} from 'react-bootstrap'


function Note({text}){

  return(
    <Card style={{  height: '80%' , width: '75%', margin: '0 auto' }}>
    <Card.Body>
      <Card.Title>Note Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Modified Date</Card.Subtitle>
      <Card.Text style={{  whiteSpace: "pre-wrap"}}> {text}  </Card.Text>
    </Card.Body>
  </Card>
  )

}

export default Note ;