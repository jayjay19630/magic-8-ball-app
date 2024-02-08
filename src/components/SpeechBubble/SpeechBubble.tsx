import './speechbubble.css'
import Typewriter from "typewriter-effect"


export const SpeechBubble = (props: {response: string}) => {
    const response = props.response;
    return (
        <div className='speech-bubble'>
            <div className='bubble-text'>
                <Typewriter 
                    options={{delay: 50}}
                    onInit={t => t.typeString(response).start()}>
                </Typewriter>
            </div>
            <div className='bubble-tail'>
            </div>
        </div>  
    );
}