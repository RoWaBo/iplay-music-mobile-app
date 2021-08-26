/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';

const Playlists = () => {
    return ( 
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary>playlists</HeadingPrimary>
        <NavigationBar />
        </main>
     );
}
 
export default Playlists;