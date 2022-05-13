import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SmallNote from "../components/SmallNote";
import Axios from "axios";
import { NotesContext } from "../App.js";

export default function DeletedPage() {
  //state for notes
  const [notes, setNotes] = useState([]);
  //get notes once
  useEffect(() => {
    Axios.get("http://localhost:3001/deleted/", {
      params: { author: localStorage.getItem("user") },
    })
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        alert("Error getting data");
      });
  }, []);
  //render
  return (
    <div>
      <NavBar />
      <h2 class="text-center">{localStorage.getItem("user")}'s Trash</h2>
      <SearchBar />
      <div
        className="d-flex flex-wrap justify-content-around"
        style={{ width: "80%", marginLeft: "10%" }}
      >
        {notes.map((note, index) => (
          <NotesContext.Provider value={note}>
            <SmallNote key={index} url="dnp" text={`${note.text}`} />
          </NotesContext.Provider>
        ))}
      </div>
    </div>
  );
}
