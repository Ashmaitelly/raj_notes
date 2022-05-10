import React,{useContext} from 'react';
import { Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { NotesContext } from '../views/NotesPage';

function SmallNote ({text, color}){
  const navigate =useNavigate()
  const note = useContext(NotesContext);
// to make a limit of letters in the typing and a colorful note.
  const truncString = (str, letter) => {
    if(str.length<=letter){
      return str
    }else{
      return str.slice(0,letter) + "...";
    }
  }

 return(
   <Card onClick={()=>{navigate(`/hnp?id=${note._id}`)}} border="secondary" style={{ width: '18rem',height: '12rem', backgroundColor: color, marginBottom: "50px", cursor: "pointer"}}>
     <Card.Body class="grid-container">
        <Card.Title>{note.title}</Card.Title>
        <Card.Subtitle className="mb-2">{Date(Date.parse(note.date_modified))}</Card.Subtitle>
          <Card.Text>
             {truncString(note.text,200)}
          </Card.Text>
     </Card.Body>
   </Card>


 )


}

export default SmallNote;