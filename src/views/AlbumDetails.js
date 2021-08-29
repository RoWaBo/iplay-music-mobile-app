/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import NavigationBar from "../components/NavigationBar"
import SpotifyApiFetch from "../components/SpotifyApiFetch";
import UtilityBar from "../components/UtilityBar"

const AlbumDetails = ({ id }) => {

    const album = SpotifyApiFetch(`https://api.spotify.com/v1/albums/${id}`)

    album && console.log(album.data.images[0].url);

    const backgroundImg = ({ colors }) => css`
        background-image: url(${album?.data.images[0].url});
        max-width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    `

    return ( 
        <>
            <UtilityBar light heading="album"/>
            <section css={backgroundImg}>

            </section>
            <NavigationBar />
        </>
     );
}
 
export default AlbumDetails;