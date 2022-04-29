import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function PostComments (){

    const [insertComments, setInsertComments] = useState("");

    return(
        <div>
        <InputGroup className="mb-2"  style={{marginRight  : "5%"}}>

                {/* forming the insert comment to the note page */}
              <span className="insert comments" class='d-flex justify-content-center'>
                <FormControl
                  placeholder="insert comments"
                  aria-label="insert comments"
                  aria-describedby="insert comments"
                  value={insertComments}
                  style={{height: '50%',width: '30%', ml:'50%'}}
                  onChange={(e) => {setInsertComments(e.target.value)}}
                />
                
                 
                <Button class="btn-outline-secondary" style={{height: '5%', width: '5%'}} onClick={()=>{console.log(insertComments)}}>Post
                </Button>
                </span>
                </InputGroup>
              </div>
    );
}


export default PostComments;