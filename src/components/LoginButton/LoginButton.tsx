import "./loginbutton.css";

import { Button } from "@mui/material";
import { Login } from "@mui/icons-material";

const LoginButton: React.FunctionComponent = () => {
  return (
    <Button className="login-button">
      <Login></Login>
      <div>Login</div>
    </Button>
  );
};

export default LoginButton;
