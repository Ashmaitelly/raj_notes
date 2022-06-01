import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SmallNote from '../components/SmallNote';
import Axios from 'axios';
import { NotesContext, SearchContext } from '../App.js';

export default function DeletedPage() {
  //state for notes
  const [notes, setNotes] = useState([]);
  //filter string
  const [search, setSearch] = useState('');
  //user
  const [user] = useState(localStorage.getItem('user'));
  const [message, setMessage] = useState('');
  //search function
  const searchBar = (searchString) => {
    setSearch(searchString);
  };
  //get notes once
  useEffect(() => {
    Axios.get('http://localhost:3001/deleted/', {
      params: { author: user },
    })
      .then((response) => {
        setNotes(response.data);
        setMessage('Your trash is empty');
      })
      .catch((error) => {
        alert('Error getting data');
      });
  }, [user]);
  //render
  return (
    <div>
      <NavBar />
      <h2 className="text-center">{user}'s Trash</h2>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <SearchContext.Provider value={searchBar}>
          <SearchBar />
        </SearchContext.Provider>
      </div>
      {notes.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-around backLayout">
          {notes
            .filter((note) =>
              note.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((note, index) => (
              <NotesContext.Provider value={note} key={index}>
                <SmallNote key={index} url="dnp" text={`${note.text}`} />
              </NotesContext.Provider>
            ))}
        </div>
      ) : (
        <h3 className="text-center">{message}</h3>
      )}
    </div>
  );
}
