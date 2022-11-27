import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentlist: []
  };
  async componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NjkyOTgxMDIsImV4cCI6MTY3MDUwNzcwMn0.880AdgJ30zF48dmru0Rnwmr9dwqjS-fkAqatzDZetBg"
    );
    let options = {
      headers: myHeaders
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
        options
      );
      let data = await response.json();
      console.log("data:", data);
      this.setState({
        commentlist: data
      });
    } catch (error) {
      console.log("error:", error);
    }
  }
  render() {
    return (
      <ListGroup>
        {this.state.commentlist.map((c) => (
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
export default AddComment;
