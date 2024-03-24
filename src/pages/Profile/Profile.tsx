import { useState } from "react";
import EightBallSVG from "../../components/general/EightBall/EightBallSVG";
import "./profile.css";
import { CosmeticHeader } from "../../components/profile/CosmeticHeader/CosmeticHeader";

enum HatType {
  "NONE",
  "COWBOY",
  "MAGICIAN",
  "TRUMP_CAP",
}

export const ProfilePage = () => {
  const [hatType, setHatType] = useState<HatType>(HatType.NONE);

  return (
    <div className="profile">
      <CosmeticHeader></CosmeticHeader>
      <div className="ball-container">
        <EightBallSVG isShaking={false} />
      </div>
    </div>
  );
};
