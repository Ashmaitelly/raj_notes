import { React, useContext } from "react";
import { Card } from "react-bootstrap";
import { NotesContext } from "../App.js";
import Moment from "moment";

function Note() {
  const note = useContext(NotesContext);

  return (
    <>
      <Card style={{ height: "80%", width: "75%", margin: "0 auto" }}>
        <Card.Body style={{ backgroundColor: note.bgc }}>
          <Card.Title>
            {note.title}{" "}
            {note.author === localStorage.getItem("user") ? (
              ""
            ) : (
              <small>{`by ~${note.author}`}</small>
            )}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Last Modified:{" "}
            {Moment(note.date_modified).format("MMMM Do YYYY, h:mm:ss a")}
          </Card.Subtitle>
          <Card.Text style={{ whiteSpace: "pre-wrap" }}>
            {" "}
            {note.text}{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Note;
