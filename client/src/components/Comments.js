import React, { useContext } from "react";
import { Stack, Card, Button } from "react-bootstrap";
import { CommentsContext } from "../App";
import Axios from "axios";
import { useSearchParams } from "react-router-dom";
import Moment from "moment";

function Comments() {
  const comments = useContext(CommentsContext);

  const [searchParams] = useSearchParams();

  const deleteComment = async (commentId) => {
    try {
      let response = await Axios.put(
        `http://localhost:3001/notes/removecomment/${searchParams.get("id")}`,
        { id: commentId }
      );
      console.log(200, response);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Stack gap={3}>
      <div className="bg-light border">Comment</div>
      {comments
        .map((comment, index) => (
          <Card key={index} style={{ padding: "10px 0px" }}>
            <Card.Subtitle>{`${comment.username} - ${Moment(
              comment.time
            ).format("MMMM Do YYYY, h:mm:ss a")}`}</Card.Subtitle>
            <Card.Body>
              {`${comment.comment}`}
              {localStorage.getItem("user") === comment.username ||
              window.location.pathname === "/hnp" ? (
                <Button
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() => {
                    deleteComment(comment._id);
                  }}
                >
                  X
                </Button>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        ))
        .reverse()}
    </Stack>
  );
}

export default Comments;
