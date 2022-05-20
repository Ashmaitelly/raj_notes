import { React, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import PostComments from "../components/PostComment";
import Comments from "../components/Comments";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Axios from "axios";
import { PostContext, CommentsContext, NotesContext } from "../App.js";

function HomeNotePage() {
  const navigate = useNavigate();
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [share, setShare] = useState("");
  //functions

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeNote = async (e) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/delete/${searchParams.get("id")}`
      );
      console.log(200, response);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  //share button function
  const shareNote = async () => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/share/${searchParams.get("id")}`,
        { user: share }
      );

      console.log(200, response);
    } catch (err) {
      alert(err.response.data);
    }
    finally{
      setShare("");
      setShow(false);
    }
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/notes/${searchParams.get("id")}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((error) => {
        alert("Error getting data");
      });
  }, [searchParams]);

  return (
    <div>
      <NavBar />
      <NotesContext.Provider value={note}>
        <Note />
      </NotesContext.Provider>
      <div className="d-md-inline" style={{ marginLeft: "12.5%" }}>
        <Button
          variant="primary"
          style={{ marginRight: "1%" }}
          onClick={() => {
            navigate(`/anp?id=${note._id}`);
          }}
        >
          Edit
        </Button>
        <Button
          variant="primary"
          style={{ marginRight: "1%" }}
          onClick={() => {
            removeNote();
          }}
        >
          Remove
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleShow();
          }}
        >
          Share with
        </Button>
      </div>
      {note.shared && (
        <PostContext.Provider value={searchParams.get("id")}>
          <PostComments />
        </PostContext.Provider>
      )}
      {note.shared && (
        <CommentsContext.Provider value={[note.comments, true]}>
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
          <Button variant="primary" type="submit" onClick={shareNote}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HomeNotePage;
