import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import Comments from "../components/Comments";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { NotesContext, CommentsContext } from "../App.js";

function DeletedNotePage() {
  const navigate = useNavigate();
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  //trying context
  const [user] = useState(localStorage.getItem("user"));

  const restoreNote = async (e) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/deleted/restore/${searchParams.get("id")}`
      );
      console.log(200, response);
      navigate("/deleted");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (e) => {
    try {
      let response = await Axios.delete(
        `http://localhost:3001/deleted/delete/${searchParams.get("id")}`
      );
      console.log(200, response);
      navigate("/deleted");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/deleted/${searchParams.get("id")}`)
      .then((response) => {
        if (response.data.author === user) {
          setNote(response.data);
        } else {
          throw new Error("You are not authorized to acces this note");
        }
      })
      .catch((error) => {
        alert(error.message);
        navigate("/home");
      });
  }, [searchParams, user, navigate]);

  return (
    <div>
      <NavBar />
      <NotesContext.Provider value={note}>
        <Note />
      </NotesContext.Provider>
      <div className="mx-auto mb-2" style={{ width: "75%" }}>
        <Button
          variant="primary"
          style={{ marginRight: "1%" }}
          onClick={() => {
            restoreNote();
          }}
        >
          Restore
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            deleteNote();
          }}
        >
          Delete
        </Button>
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
