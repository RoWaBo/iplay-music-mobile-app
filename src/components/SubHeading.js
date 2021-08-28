/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font } from '../style/Styles';

const SubHeading = ({ children }) => {

    const heading = ({ colors }) => css`
        color: ${colors.font.primary};
        font-size: ${font.size.m};
        font-weight: ${font.weight.bold};
        text-transform: capitalize;
    `

    return <h2 css={heading}>{ children }</h2>;
}
 
export default SubHeading;