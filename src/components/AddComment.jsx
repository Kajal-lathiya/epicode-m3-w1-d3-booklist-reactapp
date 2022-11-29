import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Add comment here..." />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate</Form.Label>
            <Form.Control as="select">
              <option>Select rate</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary" className="mb-1">
          Submit
        </Button>
      </div>
    );
  }
}

export default AddComment;
