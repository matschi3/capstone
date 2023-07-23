import styled from "styled-components";

export const StyledButton = styled.button`
  ${(props) => (props.posbt || props.poslr ? "position: fixed" : "")};
  ${(props) => (props.posbt ? `${props.posbt}: 0.2rem` : "")};
  ${(props) => (props.poslr ? `${props.poslr}: 0.2rem` : "")};
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "")};
  border: var(--border-sizeButton) solid
    ${(props) =>
      props.borderColor ? `${props.borderColor}` : "var(--color-black)"};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  border-radius: 5px;
  padding: 0.1rem;
  margin: 0.1rem;
`;
