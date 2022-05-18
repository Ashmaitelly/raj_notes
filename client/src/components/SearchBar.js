import React, { useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { SearchContext } from "../App";

function SearchBar() {
  const setSearch = useContext(SearchContext);
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Here"
          aria-label="Search Here"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
