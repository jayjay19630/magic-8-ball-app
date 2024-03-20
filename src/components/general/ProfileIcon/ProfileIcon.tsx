import { IconButton } from "@mui/material";
import "./profile.css";
import { Person } from "@mui/icons-material";

type ProfileProps = {
  username: String;
};

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  return (
    <div className="profile-icon">
      <div className="username">{props.username}</div>
      <IconButton>
        <Person className="person-icon"></Person>
      </IconButton>
    </div>
  );
};

export default Profile;
