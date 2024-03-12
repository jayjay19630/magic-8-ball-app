import { Button } from "@mui/material";
import "./signup.css";
import { Person2 } from "@mui/icons-material";

const SignupButton: React.FunctionComponent = () => {
  return (
    <Button className="signup-button">
      <Person2></Person2>Sign Up
    </Button>
  );
};

export default SignupButton;
