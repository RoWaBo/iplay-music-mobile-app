import { Global, css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const GlobalStyle = () => {

    const boilerPlate = css`
        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            line-height: 1.7;
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

    return <Global styles={boilerPlate} />
}

export default GlobalStyle;