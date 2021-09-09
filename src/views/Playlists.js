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
import { Link } from '@reach/router';

const Playlists = ({ playlistId }) => {

    const [trackLimit, setTrackLimit] = useState(8)

    const feauteredPlaylists = useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")?.data.playlists.items
    const randomPlaylistId = feauteredPlaylists && feauteredPlaylists[6].id

    if (playlistId === 'featured') playlistId = randomPlaylistId

    const selectedPlaylist = useSpotifyApiFetch(`https://api.spotify.com/v1/playlists/${playlistId}`)?.data

    const toggleViewAll = (e, totalTracks) => {
        if (e.target.value === "false") {
            setTrackLimit(totalTracks)
            e.target.innerText = "view less"
            e.target.value = "true"
        } else {
            setTrackLimit(8)
            e.target.innerText = "view all"
            e.target.value = "false"
        }
    }

    // selectedPlaylist && console.log(selectedPlaylist);

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

    return (
        <MainFullViewContainer>
            <UtilityBar light heading="playlists" />
            <div css={backgroundImg}>
                <HeadingPrimary light>playlists</HeadingPrimary>
                <div css={imgContainer}>
                    <ShadowBox medium><img src={selectedPlaylist?.images[0].url} alt={selectedPlaylist?.name} /></ShadowBox>
                </div>
            </div>
            <ul css={trackContainer}>
                <SubHeading large>{selectedPlaylist?.name}</SubHeading>
                {selectedPlaylist?.tracks.items.map((item, index) => index < trackLimit && (
                    <Link to={`/player/${encodeURIComponent(selectedPlaylist?.tracks.href)}/${index}`} key={item.track.uri}>
                        <ItemPresentationBar
                            heading={item.track.name}
                            description={item.track.artists[0].name}
                            additionalInfo={convertMsToMAndS(item.track.duration_ms)}
                            audioUrl={item.track.preview_url}
                        />
                    </Link>
                ))}
                <button css={button} onClick={e => toggleViewAll(e, selectedPlaylist.tracks.total)} value="false">View All</button>
            </ul>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Playlists;