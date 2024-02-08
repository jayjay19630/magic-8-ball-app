import { useState } from 'react';
import './App.css'
import EightBallSVG from './components/EightBall/EightBallSVG';
import { Heading } from './components/Heading/Heading';
import { SpeechBubble } from './components/SpeechBubble/SpeechBubble';
import { UserInput } from './components/UserInput/UserInput';

function App() {
  
  const [response, setResponse] = useState('Ask me a yes or no question!');


  return (
    <div className='home'>
      <Heading/>
      <div className='ball-container'>
        <SpeechBubble response={response}/>
        <EightBallSVG />
        <UserInput setResponse={setResponse}/>
      </div>
    </div>
  )
}

export default App
