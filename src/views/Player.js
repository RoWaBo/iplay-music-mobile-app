/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainFullViewContainer from '../components/MainFullViewContainer';
import SubHeading from '../components/SubHeading';
import UtilityBar from '../components/UtilityBar';
import { useTheme } from "../contexts/ThemeContext";
import { font, spacing } from '../style/Styles';
import { IoIosPlay, IoIosPause } from 'react-icons/io';
import { IoPlayBackSharp, IoPlayForwardSharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Gradient from '../components/Gradient';
import { convertMsToMAndS } from '../functions/HelperFunctions';

const Player = ({ mediaUrl, trackNumber }) => {

    const { theme } = useTheme()
    const { authToken } = useAuth();
    const [tracks, setTracks] = useState();
    let [trackIndex, setTrackIndex] = useState(Number(trackNumber));
    const audioElement = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (authToken) {
            axios(decodeURIComponent(mediaUrl), {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => {
                    setTracks(result.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [authToken, mediaUrl])

    useEffect(() => isPlaying && audioElement.current.play(), [trackIndex, isPlaying])

    isPlaying && (audioElement.current.ontimeupdate = e => (setCurrentTime(e.target.currentTime)))

    function playPause() {
        if (audioElement.current.paused) {
            audioElement.current.play()
            setIsPlaying(true)
        } else {
            audioElement.current.pause()
            setIsPlaying(false)
        }
    }

    const setTimeFromTimelineClick = e => {
        const updatedTime = (e.clientX - 30) / e.target.clientWidth * audioElement.current.duration
        audioElement.current.currentTime = updatedTime
        setCurrentTime(updatedTime)  
    }

    // === STYLE ===
    const imgContainer = css`
        background-image: url('/vinyl.png'), ${theme === 'light' ? `url('/sound-wave-light.png')` : `url('/sound-wave-dark.png')`};
        background-position: center;
        background-repeat: no-repeat;
        height: 395px;
        margin-top: 81px;
    `

    const textContainer = css`
        margin: ${spacing.m};
    `

    const infoText = ({ colors }) => css`
        font-size: ${font.size.m};
        font-weight: ${font.weight.light};
        color: ${colors.font.primary};
        text-align: center;
        padding: ${spacing.xs};
        text-transform: capitalize;
    `
    // MEDIACONTROL STYLING
    const mediaControls = ({ colors }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: ${spacing.m};

        & > button {
            border: none;
            display: grid;
            place-content: center;
            cursor: pointer;               
        }
    `
    const skipButtons = ({ colors }) => css`
        background: transparent;
        font-size: 1.4rem;
        padding: ${spacing.xs};
        color: ${colors.font.primary};

        & > svg {
            fill: url(#gradient-fill);
            display: initial;    
        }        
    `
    const backForwardButtons = ({ colors }) => css`
        color: ${colors.font.primary};
        background: transparent;
        font-size: 1.7rem;
        padding: ${spacing.xs};
    `
    const playButton = ({ colors }) => css`
        width: 75px;
        height: 75px;
        min-width: 75px;
        min-height: 75px;
        border-radius: 50%;
        background: ${colors.gradient};
        color: ${colors.font.secondary};
        margin: 0 ${spacing.xs};

        & > * {
            font-size: 3.5rem;
            margin-left: ${isPlaying ? 'unset' : '.4rem'};
            pointer-events: none;
        }
    
    `
    const mediaTimeLine = ({ colors }) => css`
        padding: 0 ${spacing.m};
    `
    const timeLine = ({ colors }) => css`
        background: ${colors.primary};
        height: 3px;
        width: 100%;
        position: relative;  
    `
    const timeLineDot = ({ colors }) => css`
        height: 12px;
        width: 12px;
        background: ${colors.primary};
        border-radius: 50%;
        box-shadow: 0px 0px 0px 6px rgba(255, 17, 104, 0.35);

        position: absolute;
        top: -4.5px;
        left: ${((currentTime * 1000) / (audioElement.current?.duration * 1000)) * 100}%;
    `
    const time = ({ colors }) => css`
        color: ${colors.font.primary};
        font-size: ${font.size.m};
        font-weight: ${font.weight.light};
        display: flex;
        padding-top: ${spacing.s};

        & > :first-of-type {
            margin-right: auto;
        }
    `
    return (
        <MainFullViewContainer>
            <UtilityBar heading="playing" />
            <div css={imgContainer}></div>
            {tracks && (<>
                <header css={textContainer}>
                    <SubHeading large>{tracks[trackIndex].track?.name || tracks[trackIndex].name}</SubHeading>
                    <h3 css={infoText}>{tracks[trackIndex].track?.artists[0].name || tracks[trackIndex].artists[0].name}</h3>
                </header>

                <div css={mediaTimeLine}>
                    <div css={timeLine} onClick={setTimeFromTimelineClick}>
                        <div css={timeLineDot}></div>
                    </div>
                    <div css={time}>
                        <p>{convertMsToMAndS(currentTime * 1000)}</p>
                        <p>{convertMsToMAndS(audioElement.current?.duration * 1000 || 30000)}</p>
                    </div>
                </div>

                <div css={mediaControls}>
                    <button css={skipButtons} onClick={() => trackIndex > 0 && setTrackIndex(trackIndex - 1)}><IoPlaySkipBackSharp style={trackIndex === 0 && { fill: 'unset' }} /></button>
                    <button css={backForwardButtons} onClick={() => (audioElement.current.currentTime = audioElement.current.currentTime - 3)}><IoPlayBackSharp /></button>
                    <button css={playButton} onClick={playPause}>
                        {tracks && (
                            <audio ref={audioElement} onEnded={() => trackIndex < tracks.length - 1 ? setTrackIndex(trackIndex + 1) : setIsPlaying(false)} src={tracks[trackIndex].track?.preview_url || tracks[trackIndex].preview_url} />
                        )}
                        {isPlaying ? <IoIosPause /> : <IoIosPlay />}
                    </button>
                    <button css={backForwardButtons} onClick={() => (audioElement.current.currentTime = audioElement.current.currentTime + 3)}><IoPlayForwardSharp /></button>
                    <button css={skipButtons} onClick={() => trackIndex < tracks.length - 1 && setTrackIndex(trackIndex + 1)}><IoPlaySkipForwardSharp style={trackIndex === tracks?.length - 1 && { fill: 'unset' }} /></button>
                </div>
            </>)}
            <Gradient />
        </MainFullViewContainer>
    );
}

export default Player;