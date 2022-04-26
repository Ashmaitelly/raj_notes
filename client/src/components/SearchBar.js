import React, {useState} from 'react';
import { Button } from 'react-bootstrap';



function SearchBar(){

    return(

        <>
   <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Here"
      aria-label="Search Here"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Search
    </Button>
  </InputGroup>
</>

    )
}

export default SearchBar;