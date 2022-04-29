import React from "react";
import { Card } from 'react-bootstrap';



function Note({text}){

  return(
    <div class="card text-center">
  <div class="card-header">
    Note Title
  </div>
  <div class="input-group">
  <div class="input-group-prepend">
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  <div class="card-footer text-muted">
    modified date
  </div>
</div>
  )

}

export default Note ;