/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';

const Albums = () => {
    return ( 
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary>albums</HeadingPrimary>
        <NavigationBar />
        </main>
     );
}
 
export default Albums;