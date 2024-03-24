import { IconButton } from "@mui/material";
import "./cosmetic-switch.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

enum HatType {
  "None",
  "Cowboy",
  "Magician",
  "Cap",
}

type StateProps = {
  hatType: HatType;
};

type DispatchProps = {
  handleSwitchLeft: () => void;
  handleSwitchRight: () => void;
};

type Props = StateProps & DispatchProps;

export const CosmeticSwitch: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="cosmetic-switch">
      <IconButton onClick={props.handleSwitchLeft}>
        <ArrowBackIos></ArrowBackIos>
      </IconButton>
      <div className="hat-type-label">{HatType[props.hatType]}</div>
      <IconButton onClick={props.handleSwitchRight}>
        <ArrowForwardIos></ArrowForwardIos>
      </IconButton>
    </div>
  );
};
