import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SmallNote from "../components/SmallNote";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { NotesContext, SearchContext } from "../App";

export default function NotesPage() {
  //navigate for anp
  const navigate = useNavigate();
  //state for notes
  const [notes, setNotes] = useState([]);
  //filter string
  const [search, setSearch] = useState("");
  //get notes once
  const searchBar = (searchString) => {
    setSearch(searchString);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/notes/", {
      params: { author: localStorage.getItem("user") },
    })
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        alert("Error getting data");
      });
  }, []);

  // useEffect(() => {
  //   setFilter(notes);
  //   console.log(filter);
  // }, [search]);

  return (
    <div>
      <NavBar />
      <h2 class="text-center">{localStorage.getItem("user")}'s Notes</h2>
      <SearchContext.Provider value={searchBar}>
        <SearchBar />
      </SearchContext.Provider>
      <div
        className="d-flex flex-wrap justify-content-around"
        style={{ width: "80%", marginLeft: "10%" }}
      >
        {notes
          .filter((note) => note.title.includes(search))
          .map((note, index) => (
            <NotesContext.Provider value={note}>
              <SmallNote key={index} url="hnp" text={`${note.text}`} />
            </NotesContext.Provider>
          ))}
        <div>
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
            class="btn btn-dark"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
