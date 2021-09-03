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
import { useEffect, useState } from "react";

const Player = ({ mediaUrl, trackNumber }) => {

    const { theme } = useTheme()
    const { authToken } = useAuth();
    const [tracks, setTracks] = useState();
    let [trackIndex, setTrackIndex] = useState(Number(trackNumber));

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

    tracks && console.log(trackIndex);

    // === STYLE ===
    const imgContainer = css`
        background-image: url('/vinyl.png'), ${theme === 'light' ? `url('/sound-wave-light.png')` : `url('/sound-wave-dark.png')`};
        background-position: center;
        background-repeat: no-repeat;
        height: 350px;
        margin-top: 81px;
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
    const mediaControlContainer = ({ colors }) => css`
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
            margin-left: .4rem;
            pointer-events: none;
        }
    `

    return (
        <MainFullViewContainer>
            <UtilityBar heading="playing" />
            <div css={imgContainer}></div>
            {tracks && (
                <>
                    <SubHeading large>{tracks[trackIndex].track?.name || tracks[trackIndex].name}</SubHeading>
                    <h3 css={infoText}>{tracks[trackIndex].track?.artists[0].name || tracks[trackIndex].artists[0].name}</h3>                    
                </>
            )}
            <div css={mediaControlContainer}>
                <button css={skipButtons} onClick={() => trackIndex > 0 && setTrackIndex(trackIndex - 1) }><IoPlaySkipBackSharp /></button>
                <button css={backForwardButtons}><IoPlayBackSharp /></button>
                <button css={playButton}>
                    <audio />
                    <IoIosPlay />
                </button>
                <button css={backForwardButtons}><IoPlayForwardSharp /></button>
                <button css={skipButtons} onClick={() => trackIndex < tracks.length - 1 && setTrackIndex(trackIndex + 1) }><IoPlaySkipForwardSharp /></button>
            </div>
        </MainFullViewContainer>
    );
}

export default Player;