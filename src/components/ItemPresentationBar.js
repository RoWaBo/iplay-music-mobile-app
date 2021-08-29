/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ShadowBox from "./ShadowBox";
import { IoIosPlay } from 'react-icons/io';
import SubHeading from "./SubHeading";
import { font, spacing } from '../style/Styles';

const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo }) => {
    
    const container = ({ colors }) => css`
        color: ${colors.font.primary};
        margin: ${spacing.m};
        display: flex;
        align-items: center;
    `
    const textContainer = css`
        padding-left: ${spacing.s};

        & h2 {
            overflow: hidden;
            max-height: 22px;            
        }

        & p {
            font-size: ${font.size.s};
            font-weight: ${font.weight.light};
            padding-top: ${spacing.xxs};    
        }
    `
    const infoContainer = css`
        font-size: ${font.size.s};
        font-weight: ${font.weight.light};
        margin-left: auto;
        min-width: fit-content;
    `
    const icon = ({ colors }) => css`
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
        border-radius: 50%;
        background: ${colors.gradient};
        display: grid;
        place-content: center;
        color: ${colors.font.secondary};
    `
    
    return (
        <article css={container}>
            {imgUrl ? <ShadowBox small><img src={imgUrl} alt={heading} /></ShadowBox> : <div css={icon}><IoIosPlay /></div>}
            <div css={textContainer}>
                <SubHeading>{heading}</SubHeading>
                <p>{description}</p>
            </div>
            <div css={infoContainer}>
                {additionalInfo}
            </div>
        </article>
    );
}

export default ItemPresentationBar;