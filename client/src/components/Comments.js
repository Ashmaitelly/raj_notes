import React, { useContext } from "react";
import { Stack, Card } from "react-bootstrap";
import { CommentsContext } from "../App";

function Comments() {
  const comments = useContext(CommentsContext);
  return (
    <Stack gap={3}>
      <div className="bg-light border">Comment</div>
      <Card style={{ padding: "10px 0px" }}>
        <Card.Subtitle>{`User - Date`}</Card.Subtitle>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </Stack>
  );
}

export default Comments;
