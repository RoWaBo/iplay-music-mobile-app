/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { spacing } from "../style/Styles";

const SwipableContainer = ({ children }) => {

    const style = css`
        display:flex;
        overflow-x:scroll;
        -ms-overflow-style:none;
        overflow-x: scroll;
        scrollbar-width: none;
        padding: ${spacing.m};

        &::-webkit-scrollbar {
            display: none;
        }
        & > :not(:last-of-type) {
            margin-right: ${spacing.s};
        }
    `

    return <div css={style}>{children}</div>
}

export default SwipableContainer;