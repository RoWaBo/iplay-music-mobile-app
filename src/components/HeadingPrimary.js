/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';

const HeadingPrimary = ({ children }) => {

    return (
        <h1 css={({ colors }) => css`
            background: ${colors.gradient};
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: initial;
            
            font-size: ${font.size.xl};
            text-transform: capitalize;
            margin: ${spacing.s} ${spacing.m};   
        `}>
            {children ? children : window.location.pathname.split("/")[1]}
        </h1>
    );
}

export default HeadingPrimary;