import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./signup-card.css";
import { Close } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { postSignup } from "../../../utils/SignupAndLogin/Signup";
import { useState } from "react";

type StateProps = {
  open: boolean;
  onClose: () => void;
};

interface ISignupInput {
  username: string;
  password: string;
}

const SignupCard: React.FunctionComponent<StateProps> = (props) => {
  if (!props.open) return null;

  const [alreadyTakenError, setAlreadyTakenError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupInput>();

  const handleSignup: SubmitHandler<ISignupInput> = (data: ISignupInput) => {
    postSignup(data.username, data.password, () => console.log("hello"));
  };

  return (
    <Card
      sx={{
        width: 500,
        gap: 5,
        paddingTop: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
      }}
    >
      <CardActions>
        <IconButton onClick={props.onClose} sx={{ height: 10 }}>
          <Close></Close>
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: 30, marginBottom: 2 }}>
          Create Your Account!
        </Typography>
        <form onSubmit={handleSubmit(handleSignup)}>
          <Stack spacing={3}>
            <TextField
              type="signup"
              {...register("username", { required: "Username is required!" })}
              placeholder="Username"
              error={!!errors.username}
              helperText={errors.username?.message}
            ></TextField>
            <TextField
              type="signup"
              {...register("password", { required: "Password is required!" })}
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
            <div className="button-container">
              <Button
                sx={{
                  width: 100,
                  height: 50,
                  backgroundColor: "#3b8ad8",
                }}
                type="submit"
                variant="contained"
                disableTouchRipple
              >
                <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
                  Sign Up
                </Typography>
              </Button>
            </div>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
