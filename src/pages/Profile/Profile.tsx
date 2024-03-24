import { useState } from "react";
import EightBallSVG from "../../components/general/EightBall/EightBallSVG";
import "./profile.css";
import { CosmeticHeader } from "../../components/profile/CosmeticHeader/CosmeticHeader";
import { CosmeticSwitch } from "../../components/profile/CosmeticSwitch/CosmeticSwitch";

enum HatType {
  "None",
  "Cowboy",
  "Magician",
  "Cap",
}
export const ProfilePage = () => {
  const [hatType, setHatType] = useState<HatType>(HatType.None);

  const handleSwitchRight = () => {
    if (hatType == 3) {
      setHatType(HatType.None);
    } else {
      setHatType(hatType + 1);
    }
  };

  const handleSwitchLeft = () => {
    if (hatType == 0) {
      setHatType(HatType.Cap);
    } else {
      setHatType(hatType - 1);
    }
  };

  return (
    <div className="profile">
      <CosmeticHeader></CosmeticHeader>
      <CosmeticSwitch
        hatType={hatType}
        handleSwitchLeft={handleSwitchLeft}
        handleSwitchRight={handleSwitchRight}
      ></CosmeticSwitch>
      <div className="ball-container">
        <EightBallSVG isShaking={false} hatType={hatType} />
      </div>
    </div>
  );
};
