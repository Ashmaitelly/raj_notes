import Form from 'react-bootstrap/Form'

function ColorSelector(){
return(
<>
  <Form.Label htmlFor="exampleColorInput">Color</Form.Label>
  <Form.Control
    type="color"
    id="exampleColorInput"
    defaultValue="#563d7c"
    title="Choose your color"
  />
</>
);
}
export default ColorSelector;