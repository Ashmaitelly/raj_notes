import { Dropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'

function ColorSelector(){
return(
  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Yellow</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Orange</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Light Blue</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Pink</Dropdown.Item>
  </DropdownButton>
);
}
export default ColorSelector;