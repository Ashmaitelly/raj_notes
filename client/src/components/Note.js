import { React, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { NotesContext } from '../App.js';
import Moment from 'moment';

function Note() {
  const note = useContext(NotesContext);

  return (
    <div>
      <Card
        className="mx-auto mb-3"
        style={{ marginTop: '20px', minHeight: '450px', width: '75%' }}
      >
        <Card.Body style={{ backgroundColor: note.bgc }}>
          <Card.Title>{note.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {note.author === localStorage.getItem('user') ? (
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
