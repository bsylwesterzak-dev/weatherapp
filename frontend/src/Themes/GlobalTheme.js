import { createGlobalStyle } from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f8fafb;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    html,
    body,
    #root {
    height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;