import { useEffect, useState } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import "../App.css";
import CommentArea from "./CommentArea";

const SingleBook = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <Card
        key={this.props.asin}
        style={{
          width: "18rem",
          border: selected ? "2px solid red" : ""
        }}
        className="mb-3"
        onClick={(event) => {
          setSelected(!selected);
        }}
      >
        <Card.Img variant="top" src={this.props.image} className="image20" />
        <Card.Body>
          <Card.Title>{this.props.subTitle}</Card.Title>
          <Card.Text>{this.props.prices}</Card.Text>
          <Button variant="primary">{this.props.cat}</Button>
        </Card.Body>
        {selected && <CommentArea id={this.props.id} />}
      </Card>
    </Container>
  );
};

export default SingleBook;
