import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
    ${Variables};

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }

`;

export default GlobalStyle;
