import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SmallNote from '../components/SmallNote';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { NotesContext, SearchContext } from '../App';

export default function HomePage() {
  //navigate for anp
  const navigate = useNavigate();
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
    Axios.get('http://localhost:3001/notes/', {
      headers: {
        Authorization: `Bearer ${user} ${localStorage.getItem('refresh')}`,
      },
    })
      .then((response) => {
        setNotes(response.data);
        setMessage('You have no notes');
      })
      .catch((error) => {
        alert('Error getting data');
      });
  }, [user]);

  return (
    <div>
      <NavBar />
      <h2 className="text-center">My Notes</h2>
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
                <SmallNote key={index} url="hnp" text={`${note.text}`} />
              </NotesContext.Provider>
            ))}
        </div>
      ) : (
        <h3 className="text-center">{message}</h3>
      )}

      <button
        onClick={() => {
          navigate('/anp');
        }}
        type="button"
        className="btn btn-dark newNote"
      >
        +
      </button>
    </div>
  );
}
