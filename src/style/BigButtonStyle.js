/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font } from './Styles';

export const bigButtonStyle = ({ colors }) => css`
    color: ${colors.font.primary};
    text-transform: uppercase;
    font-size: ${font.size.m};
    font-weight: ${font.weight.bold};
    border: solid ${colors.font.primary} 3px;
    border-radius: 50px;
    width: 100%;
    display: block;
    text-align: center;
    padding: .5rem;    
`