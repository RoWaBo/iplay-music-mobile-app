/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';

const Playlists = ({ playlistId }) => {

    // const playlist = playlistId !== "featured" && useSpotifyApiFetch(`https://api.spotify.com/v1/playlists/${playlistId}`) 

    return ( 
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary />
        <NavigationBar />
        </main>
     );
}
 
export default Playlists;