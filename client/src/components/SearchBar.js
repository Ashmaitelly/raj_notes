import React from 'react';
import {InputGroup, FormControl,Button} from 'react-bootstrap';
import { useState } from 'react';



function SearchBar(){
  const [type,setType]= useState("")
    return(

        <>
   <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Here"
      aria-label="Search Here"
      aria-describedby="basic-addon2"
      value={type}
      onChange={(e)=>{setType(e.target.value)}}
    />
    <Button variant="outline-secondary" id="button-addon2">
      Search
    </Button>
  </InputGroup>
</>

    )
}

export default SearchBar;