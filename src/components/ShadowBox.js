/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ShadowBox = ({ children }) => {

    const styling = ({colors}) => css`
        width: 100%;
        height: 100%;
        border-radius: 8px;
        box-shadow: 0px 0px 25px #00000026;
        overflow: hidden;
    `

    return ( 
        <div css={styling}>
            { children }
        </div>
     );
}
 
export default ShadowBox;