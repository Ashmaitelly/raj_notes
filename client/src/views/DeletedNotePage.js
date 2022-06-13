import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Note from '../components/Note';
import Comments from '../components/Comments';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { NotesContext, CommentsContext } from '../App.js';

function DeletedNotePage() {
  const navigate = useNavigate();
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  //trying context
  const [user] = useState(localStorage.getItem('user'));
  const [header] = useState({
    headers: { Authorization: `Bearer ${user}` },
  });

  const restoreNote = async (e) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/deleted/restore/${searchParams.get('id')}`
      );
      console.log(200, response);
      navigate('/deleted');
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (e) => {
    try {
      let response = await Axios.delete(
        `http://localhost:3001/deleted/delete/${searchParams.get('id')}`,
        header
      );
      console.log(200, response);
      navigate('/deleted');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/deleted/${searchParams.get('id')}`, header)
      .then((response) => {
        if (response.data && response.status !== 403) {
          setNote(response.data);
        } else {
          throw new Error('You are not authorized to access this note');
        }
      })
      .catch((error) => {
        alert(error.message);
        navigate('/home');
      });
  }, [searchParams, user, navigate, header]);

  return (
    <div>
      <NavBar />
      <div className="backLayout">
        <NotesContext.Provider value={note}>
          <Note />
        </NotesContext.Provider>
        <div className="mx-auto mb-2">
          <ul
            style={{
              display: 'flex',
              margin: '5px 272px 5px 240px',
              listStyle: 'none',
              justifyContent: 'space-between',
            }}
          >
            <li>
              <Button
                variant="light"
                style={{ text: 'black' }}
                onClick={() => {
                  restoreNote();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-reply-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                </svg>
              </Button>
            </li>
            <li>
              <Button
                variant="light"
                style={{ text: 'black' }}
                onClick={() => {
                  deleteNote();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-x-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
                </svg>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {note.shared && (
        <CommentsContext.Provider value={[note.comments, true]}>
          <Comments />
        </CommentsContext.Provider>
      )}
    </div>
  );
}
export default DeletedNotePage;
