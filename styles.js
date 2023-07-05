import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-white: #eaeaea;
    --color-black: #121212;
    --color-part: blue;
    --color-item: red;
    --color-category: green;
    --color-inAssembler: orange;
    --color-isNotAssembled: yellow;
    --color-isAssembled: orangered;
    --color-isSold: violet;
    --color-red: red;
    
    --border-size: 2px;
    --border-sizeButton: 2px;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-white);
  }
`;
