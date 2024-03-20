import "./loginbutton.css";

import { Button } from "@mui/material";
import { Login } from "@mui/icons-material";

type StateProps = {
  onClick: () => void;
};

const LoginButton: React.FunctionComponent<StateProps> = (props) => {
  return (
    <Button onClick={props.onClick} className="login-button">
      <Login></Login>
      <div>Login</div>
    </Button>
  );
};

export default LoginButton;
