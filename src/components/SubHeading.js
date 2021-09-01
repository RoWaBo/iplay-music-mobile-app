/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font } from '../style/Styles';

const SubHeading = ({ children, large }) => {

    const heading = ({ colors }) => css`
        color: ${colors.font.primary};
        font-size: ${large ? font.size.l : font.size.m};
        text-align: ${large ? 'center' : 'unset'}; 
        font-weight: ${font.weight.bold};
        text-transform: capitalize;
    `

    return <h2 css={heading}>{ children }</h2>;
}
 
export default SubHeading;