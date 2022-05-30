import { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ColorContext } from "../App";

function ColorSelector() {
  const [cols] = useState([
    "Red",
    "Yellow",
    "Green",
    "Orange",
    "Aqua",
    "Pink",
    "White",
  ]);

  const setCol = useContext(ColorContext);
  return (
    <DropdownButton variant="dark" id="dropdown-basic-button" title="Colors">
      {cols.map((col, index) => (
        <Dropdown.Item
          key={index}
          onClick={() => {
            setCol(col);
          }}
          type="color"
          defaultValue={col}
        >
          {col}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
export default ColorSelector;
