import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import "./signup-card.css";
import { Close } from "@mui/icons-material";

type StateProps = {
  open: boolean;
  onClose: () => void;
};

const SignupCard: React.FunctionComponent<StateProps> = (props) => {
  if (!props.open) return null;
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
      </CardContent>
    </Card>
  );
};

export default SignupCard;
