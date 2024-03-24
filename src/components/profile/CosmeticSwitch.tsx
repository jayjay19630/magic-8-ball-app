import { useState } from "react";

enum HatType {
  "NONE",
  "COWBOY",
  "MAGICIAN",
  "TRUMP_CAP",
}

export const CosmeticSwitch = () => {
  const [hatType, setHatType] = useState<HatType>(HatType.NONE);
  return <div> </div>;
};
