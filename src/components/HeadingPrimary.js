/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';

const HeadingPrimary = ({ children, light }) => {

    const container = ({ colors }) => css`
        padding: ${spacing.xxl} ${spacing.m} ${spacing.m};   
    `

    return (
        <header css={container}>
            <h1 css={({ colors }) => css`
            background: ${light ? colors.font.secondary : colors.gradient};
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: initial;
            
            font-size: ${font.size.xl};
            text-transform: capitalize; 
        `}>
                {children ? children : window.location.pathname.split("/")[1]}
            </h1>
        </header>
    );
}

export default HeadingPrimary;