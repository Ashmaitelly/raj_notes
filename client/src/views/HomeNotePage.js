import { React, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import PostComments from "../components/PostComment";
import Comments from "../components/Comments";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Axios from "axios";
import { NotesContext } from "../App.js";

function HomeNotePage() {
  const navigate = useNavigate();
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  //trying context

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
        <Note/>
      </NotesContext.Provider>
      <div class="d-md-inline" style={{ marginLeft: "12.5%" }}>
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
            navigate("/home");
          }}
        >
          Remove
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            prompt("enter the username you want to share with");
          }}
        >
          Share with
        </Button>
      </div>
      <PostComments />
      <Comments />
    </div>
  );
}

export default HomeNotePage;
