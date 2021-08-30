/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { IoIosPlay, IoIosPause } from 'react-icons/io';

let previousAudio;

const PlayAudioButton = ({ audioUrl }) => {

    const [iconState, setIconState] = useState("play")

    const playPause = e => {

        let currentAudio = e.target.querySelector("audio")  

        if (!previousAudio) {
            console.log("no previous audio");
            previousAudio = currentAudio;
            currentAudio.play()
        } else {
            if (previousAudio === currentAudio){
                console.log("audio match");
                if (currentAudio.paused) {
                    currentAudio.play()
                    setIconState("pause")
                } else {
                    currentAudio.pause()
                    setIconState("play")
                }  
            } else {
                console.log("else triggered");
                previousAudio.pause()
                currentAudio.play()
                previousAudio = currentAudio;                
            }           
        }
        
        // if (currentAudio.paused) {
        //     currentAudio.play()
        //     setIconState("pause")
        // } else {
        //     currentAudio.pause()
        //     setIconState("play")
        // }

        // Change icon when audio is finnished
        // setTimeout(() => !currentAudio.paused && setIconState("play"),29990)
    }

    const icon = ({ colors }) => css`
        border: none;
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
        border-radius: 50%;
        background: ${colors.gradient};
        display: grid;
        place-content: center;
        color: ${colors.font.secondary};

        & > * {
            pointer-events: none;
        }
    `

    return ( 
        <button data-audiourl={audioUrl} onClick={playPause} css={icon}>
            <audio src={audioUrl} />
            {iconState === "pause" ? <IoIosPause /> : <IoIosPlay />}
        </button>
     );
}
 
export default PlayAudioButton;