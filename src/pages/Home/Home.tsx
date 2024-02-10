import { useState } from 'react';
import OpenAI from "openai";
import './home.css'
import { Heading } from '../../components/Heading/Heading';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';
import EightBallSVG from '../../components/EightBall/EightBallSVG';
import { UserInput } from '../../components/UserInput/UserInput';

export const Home = () => {

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });

    const [response, setResponse] = useState('Ask your question and the magic eightball will reveal its mysterious wisdom.');
    const [isShaking, setIsShaking] = useState(false);

    async function fetchQuery(query: string) {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    "role": "system", 
                    "content": `You are a magic eightball who answers only yes or no questions. 
                    Answer the question with a single, customized sentence related to the query within 40 to 80 characters. 
                    Alternate between positive, negative and neutral answers. Use a mysterious, but not eloquent tone`
                },
                {
                    "role": "user",
                    "content": "will the weather be great tomorrow"
                },
                {
                    "role": "assistant",
                    "content": "My radars detect a high chance of thunderclouds and rain."
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            model: "gpt-3.5-turbo"
        });
        const response = await completion.choices[0].message.content as string;
        await setResponse(response);
        await setIsShaking(false);
    }

  return (
    <div className='home'>
      <Heading/>
      <div className='ball-container'>
        <SpeechBubble response={isShaking ? "..." : response}/>
        <EightBallSVG />
        <UserInput isShaking={isShaking} setIsShaking={setIsShaking} fetchQuery={fetchQuery}/>
      </div>
    </div>
  )
}