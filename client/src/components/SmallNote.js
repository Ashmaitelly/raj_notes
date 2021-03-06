import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../App.js';
import Moment from 'moment';
import jwt_decode from 'jwt-decode';

function SmallNote({ url }) {
  const navigate = useNavigate();

  const note = useContext(NotesContext);
  const [user] = useState(localStorage.getItem('user'));
  const [username] = useState(jwt_decode(user).name);

  // to make a limit of letters in the typing and a colorful note.
  const truncString = (str, letter) => {
    if (str.length <= letter) {
      return str;
    } else {
      return str.slice(0, letter) + '...';
    }
  };

  return (
    <Card
      onClick={() => {
        navigate(`/${url}?id=${note._id}`);
      }}
      style={{
        width: '18rem',
        height: '12rem',
        backgroundColor: `${note.bgc}`,
        marginBottom: '20px',
        cursor: 'pointer',
      }}
    >
      <Card.Body className="grid-container">
        <Card.Title>
          {truncString(note.title, 20)}{' '}
          {note.author === username ? (
            ''
          ) : (
            <small>{`~by ${note.author}`}</small>
          )}
        </Card.Title>
        <Card.Subtitle className="mb-2">
          {Moment(note.date_modified).format('MMMM Do YYYY, h:mm:ss a')}
        </Card.Subtitle>
        <Card.Text>{truncString(note.text, 150)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SmallNote;
