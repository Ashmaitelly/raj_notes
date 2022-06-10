import { React, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Note from '../components/Note';
import PostComments from '../components/PostComment';
import Comments from '../components/Comments';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import { PostContext, CommentsContext, NotesContext } from '../App.js';

function NotePage() {
  const navigate = useNavigate();
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [share, setShare] = useState('');
  const [comments, setComments] = useState([]);
  //user
  const [user] = useState(localStorage.getItem('user'));
  //functions
  const addComments = (comment) => {
    setComments([
      ...comments,
      { username: user, comment: comment, time: Date.now() },
    ]);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeNote = async (e) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/delete/${searchParams.get('id')}`
      );
      console.log(200, response);
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };

  //share button function
  const shareNote = async () => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/share/${searchParams.get('id')}`,
        { user: share }
      );

      console.log(200, response);
    } catch (err) {
      alert(err.response.data);
    } finally {
      setShare('');
      setShow(false);
    }
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/notes/${searchParams.get('id')}`)
      .then((response) => {
        if (response.data.author === user) {
          setNote(response.data);
        } else {
          throw new Error('You are not authorized to access this note');
        }
      })
      .catch((error) => {
        alert(error.message);
        navigate('/home');
      });
  }, [searchParams, user, navigate]);

  return (
    <div>
      <NavBar />
      <div className="backLayout">
        <NotesContext.Provider value={note}>
          <Note />
        </NotesContext.Provider>
        <div className="d-md-inline">
          <ul
            style={{
              display: 'flex',
              margin: '0.4px 272px 0.4px 240px',
              listStyle: 'none',
              justifyContent: 'space-between',
            }}
          >
            <li>
              <Button
                variant="light"
                style={{ text: 'black' }}
                onClick={() => {
                  navigate(`/anp?id=${note._id}`);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </Button>
            </li>
            <li>
              <Button
                variant="light"
                style={{ text: 'black' }}
                onClick={() => {
                  removeNote();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </Button>
            </li>
            <li>
              <Button
                variant="light"
                style={{ text: 'black' }}
                onClick={() => {
                  handleShow();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
              </Button>
            </li>
          </ul>
        </div>
        {note.shared && (
          <PostContext.Provider value={addComments}>
            <PostComments />
          </PostContext.Provider>
        )}
      </div>
      {note.shared && (
        <CommentsContext.Provider
          value={[[...note.comments, ...comments], true]}
        >
          <Comments />
        </CommentsContext.Provider>
      )}
      {/* Share with users modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share with</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter user to share with"
              aria-label="Enter user to share with"
              aria-describedby="basic-addon2"
              value={share}
              onChange={(e) => {
                setShare(e.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            style={{ text: 'black' }}
            type="submit"
            onClick={shareNote}
          >
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotePage;
