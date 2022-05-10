import { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'


function ColorSelector(props){

  const [col,setCol]= useState("#fff")
  props.func(col)

return(
  <DropdownButton id="dropdown-basic-button" title="Colors">
    <Dropdown.Item onClick={()=>{setCol("#F6041C")}} type="color" defaultValue="#F6041C">Red</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol("#F6D604")}}type="color" defaultValue="#F6D604">Yellow</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol("#24AB12")}} type="color" defaultValue="#24AB12">Green</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol("#F60")}} type="color" defaultValue="#F60">Orange</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol("#0EF")}} type="color" defaultValue="#0EF">Light Blue</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setCol("#FF00EA")}} type="color" defaultValue="#FF00EA">Pink</Dropdown.Item>
  </DropdownButton>
);
}
export default ColorSelector;