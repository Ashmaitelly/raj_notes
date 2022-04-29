import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function PostComments (){

    const [insertComments, setInsertComments] = useState("");

    return(
        <InputGroup className="mb-2 d-flex justify-content-center">
          <div className="insertComments d-flex justify-content-center" style={{width: "40%", marginTop: '0.7em'}}>
            <FormControl as="textarea"
              placeholder="insert comments"
              aria-label="insert comments"
              aria-describedby="insert comments"
              style={{marginRight: '0.5em'}}
              value={insertComments}
              onChange={(e) => {setInsertComments(e.target.value)}}
            />
            <Button class="btn-outline-secondary" onClick={()=>{console.log(insertComments)}}>Post</Button>
          </div>
        </InputGroup>
    );
}


export default PostComments;