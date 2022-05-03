import React from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

function SmallNote ({text, color}){
  const navigate =useNavigate()
// to make a limit of letters in the typing and a colorful note.
  const truncString = (str, letter) => {
    if(str.length<=letter){
      return str
    }else{
      return str.slice(0,letter) + "...";
    }
  }

 return(
   <Card onClick={()=>{navigate("/hnp")}} border="secondary" style={{ width: '18rem',height: '12rem', backgroundColor: color, marginBottom: "50px", cursor: "pointer"}}>
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