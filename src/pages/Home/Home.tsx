import { useState } from "react";
import "./home.css";
import { Heading } from "../../components/home/Heading/Heading";
import { SpeechBubble } from "../../components/home/SpeechBubble/SpeechBubble";
import EightBallSVG from "../../components/general/EightBall/EightBallSVG";
import { UserInput } from "../../components/home/UserInput/UserInput";

type StateProps = {
  isOpen: boolean;
};

export const Home: React.FunctionComponent<StateProps> = (props) => {
  const [response, setResponse] = useState(
    "Ask your question and the magic eightball will reveal its mysterious wisdom."
  );
  const [isShaking, setIsShaking] = useState(false);

  return (
    <div className="home">
      <Heading />
      <div className="ball-container">
        <SpeechBubble response={isShaking ? "..." : response} />
        <EightBallSVG isShaking={isShaking} />
        <UserInput
          isShaking={isShaking}
          isOpen={props.isOpen}
          setIsShaking={setIsShaking}
          setResponse={setResponse}
        />
      </div>
    </div>
  );
};
