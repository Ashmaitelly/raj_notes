import React, { useContext } from 'react';
import { SearchContext } from '../App';

function SearchBar() {
  const setSearch = useContext(SearchContext);
  return (
    <div style={{ marginBottom: '30px' }}>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search By Title"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
