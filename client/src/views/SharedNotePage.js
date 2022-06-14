import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Note from '../components/Note';
import PostComments from '../components/PostComment';
import Comments from '../components/Comments';
import Axios from 'axios';
import { PostContext, NotesContext, CommentsContext } from '../App';
import { Navigate, useSearchParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function SharedNotePage() {
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  //trying context
  const [user] = useState(localStorage.getItem('user'));
  const [username] = useState(jwt_decode(user).name);
  const [header] = useState({
    headers: {
      Authorization: `Bearer ${user} ${localStorage.getItem('refresh')}`,
    },
  });
  //comments
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/shared/${searchParams.get('id')}`, header)
      .then((response) => {
        if (response.data && response.status !== 403) {
          setNote(response.data);
        } else {
          throw new Error('You are not authorized to access this note');
        }
      })
      .catch((error) => {
        alert(error.message);
        Navigate('/home');
      });
  }, [searchParams, user, header]);

  //add comments
  const addComments = (comment) => {
    setComments([
      ...comments,
      { username: username, comment: comment, time: Date.now() },
    ]);
  };
  //render

  return (
    <div>
      <NavBar />
      <div className="backLayout">
        <NotesContext.Provider value={note}>
          <Note />
        </NotesContext.Provider>
        {note.shared && (
          <PostContext.Provider value={addComments}>
            <PostComments />
          </PostContext.Provider>
        )}
      </div>
      {note.shared && (
        <CommentsContext.Provider
          value={[[...note.comments, ...comments], false]}
        >
          <Comments />
        </CommentsContext.Provider>
      )}
    </div>
  );
}
