import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import PostComments from "../components/PostComment";
import Comments from "../components/Comments";
import Axios from "axios";
import { NotesContext } from "../App";
import { useSearchParams } from "react-router-dom";

export default function SharedNotePage() {
  //note state object
  const [note, setNote] = useState({});
  //url parameters
  const [searchParams] = useSearchParams();
  //trying context

  useEffect(() => {
    Axios.get(`http://localhost:3001/shared/${searchParams.get("id")}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((error) => {
        alert("Error getting data");
      });
  }, [searchParams]);
  //render
  return (
    <div>
      <NavBar />
      <NotesContext.Provider value={note}>
        <Note color={"#538"} text={"hello homies bi t7ine"} />
      </NotesContext.Provider>
      <PostComments />
      <Comments />
    </div>
  );
}
