import styled from "styled-components";

export const StyledHeadline = styled.h1`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 100vw;
  padding-right: 100vw;
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
  background-color: var(--color-white);
`;
