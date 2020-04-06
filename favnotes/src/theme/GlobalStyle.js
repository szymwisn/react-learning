import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; // 1rem === 10px
    }

    body {
        font-size: 1.6rem; // bring back font-size and still have 1 rem as 10px, so called "happy rems"
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle;
