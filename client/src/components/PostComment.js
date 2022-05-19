import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Comments from './Comments';
import {useNavigate,useSearchParams } from "react-router-dom";
import Axios from "axios";


  function PostComments (){
      const navigate= useNavigate();
      const [insertComments, setInsertComments] = useState("");
      const [searchParams] = useSearchParams();

//post button activation axios
    const postComment= async (user) => {
      try {
        let response = await Axios.put(
          `http://localhost:3001/notes/comment/${searchParams.get("id")}`,
          { username: user ,comment: insertComments}
        );
        console.log(200, response);
         window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };
    return(
        <InputGroup className="mb-2 d-flex justify-content-center">
          <div className="insertComments d-flex justify-content-center" style={{width: "40%", marginTop: '0.7em'}}>
            <FormControl as="textarea"
              placeholder="insert comments"
              aria-label="insert comments"
              aria-describedby="insert comments"
              style={{marginRight: '0.5em'}}
              value={insertComments}
              id="commentInput"
              onChange={(e) => {setInsertComments(e.target.value)}}
            />
            <Button class="btn-outline-secondary" onClick={()=>{postComment(localStorage.getItem("user"))}}>Post</Button>
          </div>
        </InputGroup>
    );
}


export default PostComments;