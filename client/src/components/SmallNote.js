import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SmallNote (){

 return(

 
   <Card border="secondary" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Note Title</Card.Title>
    <Card.Text>
      Note Text.....
    </Card.Text>
    
  </Card.Body>
</Card>


 )


}

export default SmallNote;