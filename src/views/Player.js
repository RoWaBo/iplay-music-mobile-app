/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';

const Player = () => {
    return ( 
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary>player</HeadingPrimary>
        <NavigationBar />
        </main>
     );
}
 
export default Player;