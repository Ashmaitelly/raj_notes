import { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ColorContext } from "../App";

function ColorSelector() {
  const [cols] = useState([
    "red",
    "yellow",
    "green",
    "orange",
    "light blue",
    "pink",
    "white",
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
      {/* <Dropdown.Item
        onClick={() => {
          setCol("#F6041C");
        }}
        type="color"
        defaultValue="#F6041C"
      >
        Red
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#F6D604");
        }}
        type="color"
        defaultValue="#F6D604"
      >
        Yellow
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#24AB12");
        }}
        type="color"
        defaultValue="#24AB12"
      >
        Green
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#F60");
        }}
        type="color"
        defaultValue="#F60"
      >
        Orange
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#0EF");
        }}
        type="color"
        defaultValue="#0EF"
      >
        Light Blue
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#FF00EA");
        }}
        type="color"
        defaultValue="#FF00EA"
      >
        Pink
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCol("#fff");
        }}
        type="color"
        defaultValue="#FFF"
      >
        White
      </Dropdown.Item> */}
    </DropdownButton>
  );
}
export default ColorSelector;
