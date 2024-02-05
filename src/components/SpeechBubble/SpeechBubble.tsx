import './speechbubble.css'

export const SpeechBubble = (props: {response: string}) => {
    const response = props.response;
    return (
        <div className='speech-bubble'>
            <div className='bubble-text'>
                {response}
            </div>
            <div className='bubble-tail'>
            </div>
        </div>
        
    );
}