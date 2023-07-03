import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  ${(props) => props.posbt || "top"}: 0.2rem;
  ${(props) => props.poslr || "right"}: 0.2rem;
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
  font-weight: bold;
  font-size: 1em;
  border: var(--border-sizeButton) solid var(--color-black);
  border-radius: 5px;
  padding: 0.1rem;
  margin: 0.1rem;
`;
