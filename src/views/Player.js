/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MainFullViewContainer from '../components/MainFullViewContainer';
import UtilityBar from '../components/UtilityBar';
import { useTheme } from "../contexts/ThemeContext";

const Player = () => {

    const { theme } = useTheme()
    
    const imgContainer = css`
        background-image: url('vinyl.png'), ${ theme === 'light' ? `url('sound-wave-light.png')` : `url('sound-wave-dark.png')`};
        background-position: center;
        background-repeat: no-repeat;
        height: 400px;
        margin-top: 81px;
    `

    return ( 
        <MainFullViewContainer>
            <UtilityBar heading="playing"/>
            <div css={imgContainer}>

            </div>
        </MainFullViewContainer>
     );
}
 
export default Player;