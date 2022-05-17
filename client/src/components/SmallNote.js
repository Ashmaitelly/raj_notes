import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../App.js";
import Moment from "moment";

function SmallNote({ url }) {
  const navigate = useNavigate();

  const note = useContext(NotesContext);

  // to make a limit of letters in the typing and a colorful note.
  const truncString = (str, letter) => {
    if (str.length <= letter) {
      return str;
    } else {
      return str.slice(0, letter) + "...";
    }
  };

  return (
    <Card
      onClick={() => {
        navigate(`/${url}?id=${note._id}`);
      }}
      style={{
        width: "18rem",
        height: "12rem",
        backgroundColor: `${note.bgc}`,
        marginBottom: "50px",
        cursor: "pointer",
      }}
    >
      <Card.Body class="grid-container">
        <Card.Title>{note.title}</Card.Title>
        <Card.Subtitle className="mb-2">
          {Moment(note.date_modified).format("MMMM Do YYYY, h:mm:ss a")}
        </Card.Subtitle>
        <Card.Text>{truncString(note.text, 190)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SmallNote;
