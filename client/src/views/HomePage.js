import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SmallNote from "../components/SmallNote";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { NotesContext, SearchContext } from "../App";

export default function HomePage() {
  //navigate for anp
  const navigate = useNavigate();
  //state for notes
  const [notes, setNotes] = useState([]);
  //filter string
  const [search, setSearch] = useState("");
  //user
  const [user] = useState(localStorage.getItem("user"));
  //search function
  const searchBar = (searchString) => {
    setSearch(searchString);
  };
  //get notes once

  useEffect(() => {
    Axios.get("http://localhost:3001/notes/", {
      params: { author: user },
    })
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        alert("Error getting data");
      });
  }, [user]);

  return (
    <div>
      <NavBar />
      <h2 className="text-center">{user}'s Notes</h2>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <SearchContext.Provider value={searchBar}>
          <SearchBar />
        </SearchContext.Provider>
      </div>
      <div
        className="d-flex flex-wrap justify-content-around xxxx"
      >
        {notes
          .filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note, index) => (
            <NotesContext.Provider value={note} key={index}>
              <SmallNote key={index} url="hnp" text={`${note.text}`} />
            </NotesContext.Provider>
          ))}
      </div>
      
      <button
          onClick={() => {
            navigate("/anp");
          }}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            cursor: "pointer",
            width: "55px",
            height: "55px",
            padding: "0px 0px",
            borderRadius: "50px",
            fontSize: "30px",
            textAlign: "center",
          }}
          type="button"
          className="btn btn-dark"
        >
          +
        </button>
    </div>
  );
}
