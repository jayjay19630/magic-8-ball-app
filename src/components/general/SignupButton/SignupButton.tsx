import { Button } from "@mui/material";
import "./signup.css";
import { Person2 } from "@mui/icons-material";

type StateProps = {
  onClick: () => void;
};

const SignupButton: React.FunctionComponent<StateProps> = (props) => {
  return (
    <Button className="signup-button" onClick={props.onClick}>
      <Person2></Person2>Sign Up
    </Button>
  );
};

export default SignupButton;
