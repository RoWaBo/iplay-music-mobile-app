/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import SpotifyApiFetch from '../components/SpotifyApiFetch';

const Playlists = ({ playlistId }) => {

    const playlist = playlistId !== "featured" && SpotifyApiFetch(`https://api.spotify.com/v1/playlists/${playlistId}`) 

    const track = playlist && playlist.data.tracks.items[0].track.preview_url

    const audio = new Audio(track)

    return ( 
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary />
        <button onClick={() => audio.play()} >play</button>
        <NavigationBar />
        </main>
     );
}
 
export default Playlists;