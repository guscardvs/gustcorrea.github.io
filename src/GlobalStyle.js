import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        height: 100vh;
        width: 100vw;
        font-family: "Open Sans", sans-serif;
    }
    
    .title{
        font-family: "Roboto", sans-serif;
    }

    #root{
        min-height: 100vh;
        width: 100vw;
        display: flex;
    }

    a, a:visited{
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
