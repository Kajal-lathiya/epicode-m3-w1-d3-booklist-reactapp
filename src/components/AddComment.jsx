import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ commentId }) => {
  const [commentArray, setCommentArray] = useState([
    {
      comment: "",
      rate: "",
      elementId: commentId
    }
  ]);
  const fetchAddComment = async () => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NjkyOTgxMDIsImV4cCI6MTY3MDUwNzcwMn0.880AdgJ30zF48dmru0Rnwmr9dwqjS-fkAqatzDZetBg"
    );
    let options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(commentArray)
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        options
      );
      let data = await response.json();
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here..."
            value={commentArray.comment}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rate</Form.Label>
          <Form.Control as="select" value={commentArray.rate}>
            <option>Select rate</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        className="mb-1"
        onClick={() => fetchAddComment()}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddComment;
