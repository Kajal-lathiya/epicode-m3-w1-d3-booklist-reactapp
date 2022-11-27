import { Component } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import "../App.css";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container>
        <Card
          key={this.props.id}
          style={{
            width: "18rem",
            border: this.state.selected ? "2px solid red" : ""
          }}
          className="mb-3"
          onClick={(event) => {
            this.setState({ selected: !this.state.selected});
          }}
        >
          <Card.Img variant="top" src={this.props.image} className="image20" />
          <Card.Body>
            <Card.Title>{this.props.subTitle}</Card.Title>
            <Card.Text>{this.props.prices}</Card.Text>
            <Button variant="primary">{this.props.cat}</Button>
          </Card.Body>
          {this.state.selected && <CommentArea id={this.props.id} />}
        </Card>

      </Container>
    );
  }
}

export default SingleBook;
