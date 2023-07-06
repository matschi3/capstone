import styled from "styled-components";
import LinkTo from "../LinkTo/index.js";

export const StyledFooterElement = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-around;
`;

export const LinkToFooter = styled(LinkTo)``;
