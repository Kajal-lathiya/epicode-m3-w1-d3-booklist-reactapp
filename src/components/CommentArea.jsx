import { Form } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = ({id}) => (
  <>
    {/* <AddComment /> */}
    <CommentsList commentId={id} />
  </>
);
export default CommentArea;
