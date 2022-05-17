import React, { useContext } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { SearchContext } from "../App";

function SearchBar() {
  const setSearch = useContext(SearchContext);
  return (
    <>
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
    </>
  );
}

export default SearchBar;
