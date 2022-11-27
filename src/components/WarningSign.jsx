import { Alert } from "react-bootstrap";

const WarningSign = ({ content }) => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          {content}
        </Alert>
      ))}
    </>
  );
};

export default WarningSign;
