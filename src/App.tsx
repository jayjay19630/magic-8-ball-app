import './App.css'
import EightBallSVG from './components/EightBall/EightBallSVG';
import { Heading } from './components/Heading/Heading';
import { SpeechBubble } from './components/SpeechBubble/SpeechBubble';

function App() {
  
  return (
    <div className='home'>
      <Heading/>
      <div className='ball-container'>
        <SpeechBubble response={''}/>
        <EightBallSVG />
      </div>
    </div>
  )
}

export default App
