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
import { Close, Person } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { postLogin } from "../../../utils/SignupAndLogin/Login";

type StateProps = {
  open: boolean;
  onClose: () => void;
};

interface ILoginInput {
  username: string;
  password: string;
}

/**
 * Login popup component that has form to create new user details
 */
const SignupCard: React.FunctionComponent<StateProps> = (props) => {
  // Render nothing if popup state is not open
  if (!props.open) return null;

  // Creating a form with specified inputs ISignupInput
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>();

  const handleSignup: SubmitHandler<ILoginInput> = (data: ILoginInput) => {
    postLogin(data.username, data.password);
  };

  // Fixed position of popup in centre of page. Overlay to dim background as popup appears
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
          Login To Your Account!
        </Typography>
        <form onSubmit={handleSubmit(handleSignup)}>
          <Stack spacing={3}>
            <div className="icon-container">
              <Person sx={{ fontSize: 50 }}></Person>
            </div>
            <TextField
              type="login"
              {...register("username", { required: "Username is required!" })}
              placeholder="Username"
              error={!!errors.username}
              helperText={errors.username?.message}
            ></TextField>
            <TextField
              type="login"
              {...register("password", { required: "Password is required!" })}
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
            <Button
              sx={{
                width: 470,
                alignSelf: "center",
                height: 40,
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
            <Typography>Don't Have An Account? Sign Up!</Typography>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
