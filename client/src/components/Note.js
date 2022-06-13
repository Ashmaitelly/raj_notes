import { React, useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { NotesContext } from '../App.js';
import Moment from 'moment';
import jwt_decode from 'jwt-decode';

function Note() {
  const note = useContext(NotesContext);
  const [user] = useState(localStorage.getItem('user'));
  const [username] = useState(jwt_decode(user).name);
  console.log(username);

  return (
    <div>
      <Card
        className="mx-auto mb-3"
        style={{
          marginTop: '20px',
          minHeight: '450px',
          width: '75%',
          borderStyle: 'none',
        }}
      >
        <Card.Body style={{ backgroundColor: note.bgc }}>
          <Card.Title>{note.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {note.author === username ? (
              ''
            ) : (
              <small>{`by ${note.author}`}</small>
            )}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Last Modified:{' '}
            {Moment(note.date_modified).format('MMMM Do YYYY, h:mm:ss a')}
          </Card.Subtitle>
          <Card.Text style={{ whiteSpace: 'pre-wrap' }}>
            {' '}
            {note.text}{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Note;
