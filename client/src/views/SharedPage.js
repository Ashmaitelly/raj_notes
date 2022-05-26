import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SmallNote from "../components/SmallNote";
import Axios from "axios";
import { NotesContext, SearchContext } from "../App.js";

export default function SharedPage() {
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
    Axios.get("http://localhost:3001/shared/", {
      params: { viewer: user },
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
      <h2 className="text-center">Shared with {user}</h2>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <SearchContext.Provider value={searchBar}>
          <SearchBar />
        </SearchContext.Provider>
      </div>
      <div
        className="d-flex flex-wrap justify-content-around"
        style={{ width: "80%", marginLeft: "10%" }}
      >
        {notes
          .filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note, index) => (
            <NotesContext.Provider value={note}>
              <SmallNote key={index} url="snp" text={`${note.text}`} />
            </NotesContext.Provider>
          ))}
      </div>
    </div>
  );
}
