import { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'


function ColorSelector(){

  const [col,setCol]= useState("#fff")

return(
  <DropdownButton id="dropdown-basic-button" title="Colors">
    <Dropdown.Item onClick={()=>{setCol(col)}} type="color" defaultValue="#F6041C">Red</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol(col)}}type="color" defaultValue="#F6D604">Yellow</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol(col)}} type="color" defaultValue="#24AB12">Green</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol(col)}} type="color" defaultValue="#F60">Orange</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol(col)}} type="color" defaultValue="#0EF">Light Blue</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol(col)}} type="color" defaultValue="#FF00EA">Pink</Dropdown.Item>
  </DropdownButton>
);
}
export default ColorSelector;