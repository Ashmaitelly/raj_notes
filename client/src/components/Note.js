import {React,useContext} from "react";
import {Card} from 'react-bootstrap';
import { NotesContext } from "../views/NotesPage";
import Moment from "moment";

function Note({text, color}){
 
  const note = useContext(NotesContext);
  const dateModified = Date(Date.parse(note.date_modified));

  return(
    <>
  <Card style={{  height: '80%' , width: '75%', margin: '0 auto' }}>
    <Card.Body style={{ backgroundColor: color }}>
      <Card.Title>{note.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Last Modified: {Moment(dateModified).format('MMMM Do YYYY, h:mm:ss a')}</Card.Subtitle>
          <Card.Text style={{  whiteSpace: "pre-wrap"}}> {note.text}  </Card.Text>
    </Card.Body>
  </Card>
  </>
  )
}

export default Note ;