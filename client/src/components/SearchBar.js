import React, { useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { SearchContext } from "../App";

function SearchBar() {
  const setSearch = useContext(SearchContext);
  return (
    <div style={{ marginBottom:"15px"}}>
      <input type="text" name="search" placeholder="Search By Title"

onChange={(e) => {
      setSearch(e.target.value);
    }}></input>
    </div>
  );
}

export default SearchBar;
