import React from 'react';
import { Card } from 'react-bootstrap';

function SmallNote ({text, color}){
// to make a limit of letters in the typing and a colorful note.
  const truncString = (str, letter) => {
    if(str.length<=letter){
      return str
    }else{
      return str.slice(0,letter) + "...";
    }
  }

 return(
   <Card border="secondary" style={{ width: '18rem',height: '12rem', backgroundColor: color, marginBottom: "50px"}}>
     <Card.Body class="grid-container">
        <Card.Title>Note Title</Card.Title>
          <Card.Text>
             {truncString(text,200)}
          </Card.Text>
     </Card.Body>
   </Card>


 )


}

export default SmallNote;