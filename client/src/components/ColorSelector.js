import Form from 'react-bootstrap/Form'

function ColorSelector(){
return(
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Change Color
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Red</a>
    <a class="dropdown-item" href="#">Black</a>
    <a class="dropdown-item" href="#">Pink</a>
    <a class="dropdown-item" href="#">Green</a>
    <a class="dropdown-item" href="#">Yellow</a>
  </div>
</div>
);
}
export default ColorSelector;