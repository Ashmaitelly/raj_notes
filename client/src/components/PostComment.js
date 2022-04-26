import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function PostComments (){

    const [insertComments, setInsertComments] = useState("");

    return(
        <div>
        <InputGroup className="mb-2">

                {/* forming the insert comment to the note page */}


              <span className="insert comments">
                <FormControl 
                  placeholder="insert comments"
                  aria-label="insert comments"
                  aria-describedby="insert comments"
                  value={insertComments}
                  style={{height: '50%',width: '60%'}}
                  onChange={(e) => {setInsertComments(e.target.value)}}
                />
                </span>
                <Button style={{height: '10%', width: '5%'}} onClick={()=>{console.log(insertComments)}}>Post</Button>
                </InputGroup>
              </div>
    );
}


export default PostComments;