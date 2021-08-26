import { Global, css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { font } from "./Styles";

const GlobalStyle = () => {

    const globalStyles = css`
        @import url(${font.fontImportUrl});

        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            line-height: 1.5;
            font-family: ${font.family};
        }
        img {
            width:100%;
            height:auto;
            display:block;
        }
        a {
            text-decoration: none;
            color: black;
        }
        ul {
            list-style: none;
        } 
    `

    return <Global styles={globalStyles} />
}

export default GlobalStyle;