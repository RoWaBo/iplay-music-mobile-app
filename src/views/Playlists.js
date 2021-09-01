/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import MainFullViewContainer from "../components/MainFullViewContainer";
import UtilityBar from '../components/UtilityBar';

const Playlists = ({ playlistId }) => {

    // const playlist = playlistId !== "featured" && useSpotifyApiFetch(`https://api.spotify.com/v1/playlists/${playlistId}`) 

    const backgroundImg = ({ colors }) => css`
        background-image: url('/sound-wave.svg');
        max-width: 100%;
        height: 275px;
        background-size: cover;
        background-position: center;
    `

    return (
        <MainFullViewContainer>
            <UtilityBar light heading="playlists" />
            <section css={backgroundImg}>
                <HeadingPrimary light>playlists</HeadingPrimary>
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Playlists;