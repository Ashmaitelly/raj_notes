import React, { useContext } from "react";
import { Stack, Card } from "react-bootstrap";
import { CommentsContext } from "../App";
import Moment from "moment";

function Comments() {
  const comments = useContext(CommentsContext);
  return (
    <Stack gap={3}>
      <div className="bg-light border">Comment</div>
      {comments.map((comment, index) => (
        <Card style={{ padding: "10px 0px" }}>
          <Card.Subtitle>{`${comment.username} - ${Moment(comment.time).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}`}</Card.Subtitle>
          <Card.Body>{`${comment.comment}`}</Card.Body>
        </Card>
      ))}
    </Stack>
  );
}

export default Comments;
