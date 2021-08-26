/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';

const HeadingPrimary = ({ children }) => {
    return ( 
        <h1 css={({colors}) => css`
            color: ${colors.font.primary};
            font-size: ${font.size.xl};
            text-transform: capitalize;
            margin: ${spacing.s} ${spacing.m};   
        `}
        >{ children }</h1>
     );
}
 
export default HeadingPrimary;