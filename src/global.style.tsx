import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    }

    body,
    p,
    ol,
    ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    }

    ol,
    ul {
    list-style: none;
    }

    body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 2rem 6rem;
    }
    img {
    max-width: 100%;
    height: auto;
    display: inline-block;
    }

    a {
    text-decoration: none;
    color: black;
    }

    //CUSTOM SCROLLBAR
    body::-webkit-scrollbar {
    width: 1rem;
    }

    body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 7px rgba(82, 82, 82, 0.3);
    }

    body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }

body{
    @media screen and (max-width: 800px){
        padding: 1rem;
    }
}
`;

export default GlobalStyle;
