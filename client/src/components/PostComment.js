import React, { useState, useContext } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import { PostContext } from '../App';


function PostComments() {
  const addComment = useContext(PostContext);
  const [insertComments, setInsertComments] = useState('');
  const [searchParams] = useSearchParams();

  //post button activation axios
  const postComment = async (user) => {
    try {
      if (insertComments === '') {
        throw new Error('Empty comment');
      }
      let response = await Axios.put(
        `http://localhost:3001/notes/comment/${searchParams.get('id')}`,
        { username: user, comment: insertComments }
      );
      console.log(200, response);
      addComment(insertComments);
      setInsertComments('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <InputGroup className="mb-2 d-flex justify-content-center">
      <div
        className="insertComments d-flex justify-content-center"
        style={{ width: '40%', marginTop: '40px' }}
      >
        <FormControl
          as="textarea"
          placeholder="insert comments"
          aria-label="insert comments"
          aria-describedby="insert comments"
          style={{ marginRight: '0.5em' }}
          value={insertComments}
          id="commentInput"
          onChange={(e) => {
            setInsertComments(e.target.value);
          }}
        />
        <Button
          variant="light"
          style={{text: "black"}}
          onClick={() => {
            postComment(localStorage.getItem('user'));
          }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-signpost-fill" viewBox="0 0 16 16">
  <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"/>
</svg>
        </Button>
      </div>
    </InputGroup>
  );
}

export default PostComments;
