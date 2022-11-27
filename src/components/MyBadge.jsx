import { Badge } from "react-bootstrap";

const MyBadge = ({ bgcolor }) => {
  return (
    <h1>
      Example heading <Badge variant={bgcolor}>New</Badge>
    </h1>
  );
};

export default MyBadge; 
