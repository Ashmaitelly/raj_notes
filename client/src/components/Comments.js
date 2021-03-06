import React, { useContext, useState } from 'react';
import { Stack, Card, Button } from 'react-bootstrap';
import { CommentsContext } from '../App';
import Axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Moment from 'moment';
import jwt_decode from 'jwt-decode';

function Comments() {
  const comments = useContext(CommentsContext);

  const [searchParams] = useSearchParams();

  const [user] = useState(localStorage.getItem('user'));
  const [username] = useState(jwt_decode(user).name);

  const deleteComment = async (commentId) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/removecomment/${searchParams.get('id')}`,
        { id: commentId },
        {
          headers: {
            Authorization: `Bearer ${user} ${localStorage.getItem('refresh')}`,
          },
        }
      );
      console.log(200, response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack gap={3}>
      <div className="bg-light border">Comment</div>
      <div className="backLayout">
        {comments[0].length === 0 ? (
          <center>
            {' '}
            <h3 className="text-light">No comments</h3>
          </center>
        ) : (
          comments[0]
            .map((comment, index) => (
              <Card
                key={index}
                id={index}
                style={{
                  margin: '2% 30.5%',
                  padding: '5px',
                  minHeight: '5px',
                  width: '500px',
                  verticalAlign: 'middle',
                }}
                onMouseOver={() => {
                  document.getElementById(`d-${index}`).style.display = '';
                }}
                onMouseOut={() => {
                  document.getElementById(`d-${index}`).style.display = 'none';
                }}
              >
                <Card.Subtitle
                  className="mb-2"
                  style={{
                    color: `${comment.username === username ? 'green' : ''}`,
                  }}
                >
                  <h4>{`${comment.username}`}</h4>
                </Card.Subtitle>

                <Card.Subtitle>
                  <small>
                    {`- ${Moment(comment.time).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}`}
                  </small>
                </Card.Subtitle>
                <Card.Body>
                  <h5>{`${comment.comment}`}</h5>
                  {username === comment.username || comments[1] ? (
                    <Button
                      variant="danger"
                      id={`d-${index}`}
                      style={{
                        float: 'right',
                        borderRadius: '100%',
                        display: 'none',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        paddingBottom: '4.094px',
                        paddingTop: '4.094px',
                      }}
                      onClick={() => {
                        deleteComment(comment._id);
                        document.getElementById(index).style.display = 'none';
                      }}
                    >
                      x
                    </Button>
                  ) : (
                    ''
                  )}
                </Card.Body>
              </Card>
            ))
            .reverse()
        )}
      </div>
    </Stack>
  );
}

export default Comments;
