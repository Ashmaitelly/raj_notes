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
          variant="dark"
          onClick={() => {
            postComment(localStorage.getItem('user'));
          }}
        >
          Post
        </Button>
      </div>
    </InputGroup>
  );
}

export default PostComments;
