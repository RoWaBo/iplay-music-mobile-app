/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IoIosPlay } from 'react-icons/io';


const PlayAudioButton = ({ audioUrl }) => {

    const playPause = e => {
        const audio = new Audio(e.target.dataset.audiourl) 

        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
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
        <button data-audiourl={audioUrl} onClick={playPause} css={icon}><IoIosPlay /></button>
     );
}
 
export default PlayAudioButton;