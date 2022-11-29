import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import horrorArray from "./horror.json";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="App">
      <WarningSign content=" This is a alert — check it out!" />
      <MyBadge bgcolor="success" />
      <Container>
        <Row>
          <Col>
            <BookList books={horrorArray} />
          </Col>
          <Col>
            <AddComment />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
