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
import { postSignup } from "../../utils/SignupAndLogin/Signup";

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
        height: 600,
      }}
    >
      <CardActions>
        <IconButton onClick={props.onClose} sx={{ height: 10 }}>
          <Close></Close>
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          Create Your Account!
        </Typography>
        <form onSubmit={handleSubmit(handleSignup)}>
          <Stack>
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
            <Button
              sx={{
                width: 100,
                height: 50,
                backgroundColor: "#2c67f2",
              }}
              type="submit"
              variant="contained"
              disableTouchRipple
            ></Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
