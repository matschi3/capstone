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
    --color-part: #00C198;
    --color-item:  #01959C;
    --color-category: #11788F;
    --color-highlight: #F0C326;
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
  }
`;
