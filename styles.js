import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["variable"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${robotoFlex.style.fontFamily};
    font-weight: ${robotoFlex.style.fontWeight};
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
    background-color: var(--color-white);
    background-image: linear-gradient(to top, #eaeaea 0%, #feada6 100%);
    /* background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%); */
  }
`;
