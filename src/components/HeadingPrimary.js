/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';

const HeadingPrimary = ({ children }) => {

    const container = ({ colors }) => css`
        margin: ${spacing.xxl} ${spacing.m} ${spacing.m};
        background: ${colors.background.primary};    
    `

    return (
        <div css={container}>
            <h1 css={({ colors }) => css`
            background: ${colors.gradient};
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: initial;
            
            font-size: ${font.size.xl};
            text-transform: capitalize; 
        `}>
                {children ? children : window.location.pathname.split("/")[1]}
            </h1>
        </div>
    );
}

export default HeadingPrimary;