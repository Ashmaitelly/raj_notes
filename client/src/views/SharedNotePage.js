import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import PostComments from "../components/PostComment";
import Comments from "../components/Comments";
import Axios from "axios";
import { PostContext, NotesContext, CommentsContext } from "../App";
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
        <Note />
      </NotesContext.Provider>
      {note.shared && (
        <PostContext.Provider value={searchParams.get("id")}>
          <PostComments />
        </PostContext.Provider>
      )}
      {note.shared && (
        <CommentsContext.Provider value={[note.comments, false]}>
          <Comments />
        </CommentsContext.Provider>
      )}
    </div>
  );
}
