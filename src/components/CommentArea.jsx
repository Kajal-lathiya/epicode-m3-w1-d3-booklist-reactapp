import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = ({id}) => (
  <>
    <AddComment commentId={id} />
    <CommentsList commentId={id} />
  </>
);
export default CommentArea;
