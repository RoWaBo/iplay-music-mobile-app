/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import { font, spacing } from '../style/Styles';
import { navigate } from "@reach/router";
import { useState } from 'react';

const UtilityBar = ({ heading, light }) => {

    const [opacity, setOpacity] = useState()
    
    window.onscroll = () => light && window.scrollY / 150 < 1.1 && setOpacity(window.scrollY / 150)            
    
    const container = ({ colors }) => css`
        color: ${light ? colors.font.secondary : colors.font.primary};
        background-color: ${light ? `rgba(255, 17, 104, ${opacity})` : colors.background.primary};
        display: flex;
        align-items: center;
        width: 100%;
        height: 81px;
        position: fixed;
        top:0;
        z-index: 10;
        transition: ease-in-out;
    `

    const icons = css`
        padding: ${spacing.m};
        display: grid;
        place-content: center;
        font-size: 1.3rem;   
    `

    const text = css`
        margin: 0 auto;
        font-weight: ${font.weight.light};
        font-size: ${font.size.m};
        text-transform: uppercase;
        letter-spacing: 2px;
    `

    return ( 
        <div css={container}>
            <div css={icons} onClick={() => navigate(-1)}>
                <IoIosArrowBack />
            </div>    
            <div css={text}>
                { heading }
            </div>    
            <div css={icons} style={{visibility: 'hidden'}}>
                <IoIosSearch />
            </div>    
        </div>
     );
}
 
export default UtilityBar;