import { Global, css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const GlobalStyle = () => {

    const boilerPlate = css`

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            line-height: 1.7;
            font-family: 'Poppins', sans-serif;
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