import { useState } from "react";
import "./home.css";
import { Heading } from "../../components/home/Heading/Heading";
import { SpeechBubble } from "../../components/home/SpeechBubble/SpeechBubble";
import EightBallSVG from "../../components/home/EightBall/EightBallSVG";
import { UserInput } from "../../components/home/UserInput/UserInput";

export const Home = () => {
  const [response, setResponse] = useState(
    "Ask your question and the magic eightball will reveal its mysterious wisdom."
  );
  const [isShaking, setIsShaking] = useState(false);

  return (
    <div className="home">
      <Heading />
      <div className="ball-container">
        <SpeechBubble response={isShaking ? "..." : response} />
        <EightBallSVG />
        <UserInput
          isShaking={isShaking}
          setIsShaking={setIsShaking}
          setResponse={setResponse}
        />
      </div>
    </div>
  );
};
