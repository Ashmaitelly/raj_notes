import React, { useState, useEffect } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import NavBar from "../components/NavBar";
import ColorSelector from "../components/ColorSelector";
import { useNavigate, useSearchParams } from "react-router-dom";
import Axios from "axios";
import { ColorContext } from "../App";

function AddNotePage({ text }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [word, setWord] = useState("");
  const [edit] = useState(searchParams.get("id") ? true : false);
  text = ``;
  const [noteColor, setNoteColor] = useState("");

  const setCol = (color) => {
    setNoteColor(color);
  };

  useEffect(() => {
    if (edit) {
      Axios.get(`http://localhost:3001/notes/${searchParams.get("id")}`)
        .then((response) => {
          let note = response.data;
          setNoteColor(note.bgc);
          setTitle(note.title);
          setWord(note.text);
        })
        .catch((error) => {
          alert("Error getting data");
        });
    }
  }, [searchParams, edit]);

  const addNewNote = async (e) => {
    try {
      let response = await Axios.post("http://localhost:3001/notes/create", {
        title,
        text: word,
        bgc: noteColor,
        author: localStorage.getItem("user"),
      });
      console.log(200, response);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  const editNote = async (e) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/update/${searchParams.get("id")}`,
        { title, text: word, bgc: noteColor }
      );
      console.log(200, response);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <NavBar />
      <Card
        className="mx-auto mb-3"
        style={{
          minHeight: "450px",
          width: "75%",
          marginTop: "20px",
          backgroundColor: noteColor,
        }}
      >
        <Card.Body>
          <Card.Title>
            <input
              style={{
                border: "none",
                backgroundColor: "transparent",
                resize: "none",
                outline: "none",
              }}
              size="lg"
              id="title"
              placeholder="Title"
              type="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("text").focus();
                }
              }}
            />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text style={{ whiteSpace: "pre-wrap" }}>
            <FormControl
              as="textarea"
              id="text"
              style={{
                border: "none",
                backgroundColor: "transparent",
                resize: "none",
                outline: "none",
                height: "60vh",
                boxShadow: "none",
              }}
              placeholder="Text"
              aria-label="Text"
              aria-describedby="basic-addon1"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="d-md-inline ">
        <ul
          style={{
            display: "flex",
            margin: " 20px 272px 20px 240px",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Button variant="dark" onClick={edit ? editNote : addNewNote}>
              Save
            </Button>
          </li>

          <li>
            <ColorContext.Provider value={setCol}>
              <ColorSelector />
            </ColorContext.Provider>
          </li>

          <li>
            <Button
              variant="dark"
              onClick={() => {
                navigate("/home");
              }}
            >
              Cancel
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddNotePage;
