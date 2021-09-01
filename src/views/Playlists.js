/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import MainFullViewContainer from "../components/MainFullViewContainer";
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import ItemPresentationBar from '../components/ItemPresentationBar';
import { font, spacing } from '../style/Styles';
import { convertMsToMAndS } from '../functions/HelperFunctions';
import { useState } from 'react';
import ShadowBox from '../components/ShadowBox';

const Playlists = ({ playlistId }) => {

    const [trackLimit, setTrackLimit] = useState(8)
    
    const feauteredPlaylists = useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")?.data.playlists.items
    const randomPlaylistId = feauteredPlaylists && feauteredPlaylists[6].id

    if (playlistId === 'featured') playlistId = randomPlaylistId

    const selectedPlaylist = useSpotifyApiFetch(`https://api.spotify.com/v1/playlists/${playlistId}`)?.data

    // === STYLING ===
    const backgroundImg = ({ colors }) => css`
        background-image: url('/sound-wave.svg');
        max-width: 100%;
        height: 275px;
        background-size: cover;
        background-position: center;
    `

    const trackContainer = css`
        & > h2 {
            padding: 3.5rem ${spacing.m} 0;
        }
    `

    const imgContainer = css`
        width: 100%;
        display: grid;
        place-content: center;
    `        

    const button = ({ colors }) => css`
        color: ${colors.primary};
        background: ${colors.background.primary};
        text-transform: uppercase;
        font-size: ${font.size.m};
        font-weight: ${font.weight.bold};
        border: solid ${colors.primary} 3px;
        border-radius: 50px;
        text-align: center;
        padding: .5rem;
        width: 86%;
        cursor: pointer;
        margin: ${spacing.m} ${spacing.m};    
    `

    selectedPlaylist && console.log(selectedPlaylist);    

    return (
        <MainFullViewContainer>
            <UtilityBar light heading="playlists" />
            <div css={backgroundImg}>
                <HeadingPrimary light>playlists</HeadingPrimary>
                <div css={imgContainer}>
                    <ShadowBox medium><img src={selectedPlaylist?.images[0].url} alt={selectedPlaylist?.name}/></ShadowBox>
                </div>
            </div>
            <section css={trackContainer}>
                <SubHeading large>{selectedPlaylist?.name}</SubHeading>
                {selectedPlaylist?.tracks.items.map((item, index) => index < trackLimit && (
                    <ItemPresentationBar
                        key={item.track.uri}
                        heading={item.track.name}
                        description={item.track.artists[0].name}
                        additionalInfo={convertMsToMAndS(item.track.duration_ms)}
                        audioUrl={item.track.preview_url}
                    />
                ))}
                <button css={button} onClick={() => setTrackLimit(selectedPlaylist.tracks.total)}>View All</button>
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Playlists;