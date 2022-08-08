import "./reset.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    :root {
        --color-primary: #FF427F;
        --color-primary-focus: #FF577F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: var(--grey-4);
        font-family: 'Inter', sans-serif;
        display: flex;
        gap: 30px;
    }
`;
