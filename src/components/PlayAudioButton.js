/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { IoIosPlay, IoIosPause } from 'react-icons/io';


const PlayAudioButton = ({ audioUrl }) => {

    const [iconState, setIconState] = useState("play")

    const playPause = e => {

        const currentAudio = e.target.querySelector("audio")  

        if (currentAudio.paused) {
            currentAudio.play()
            setIconState("pause")
        } else {
            currentAudio.pause()
            setIconState("play")
        }
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