import { IconButton } from "@mui/material";
import "./profile.css";
import { Person } from "@mui/icons-material";

type ProfileProps = {
  username: String;
};

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  return (
    <div className="profile-icon">
      <IconButton>
        <Person className="person-icon"></Person>
      </IconButton>
      <div className="username">{props.username}</div>
    </div>
  );
};

export default Profile;
