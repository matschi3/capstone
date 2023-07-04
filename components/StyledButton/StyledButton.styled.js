import styled from "styled-components";

export const StyledButton = styled.button`
  /* position: fixed; */
  // if there is a prop 'posbt' or 'poslr', then use it, otherwise use nothing
  ${(props) => (props.posbt || props.poslr ? "position: fixed" : "")};
  ${(props) => (props.posbt ? `${props.posbt}: 0.2rem` : "")};
  ${(props) => (props.poslr ? `${props.poslr}: 0.2rem` : "")};
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
  font-weight: bold;
  font-size: ${({ fontsize }) => (fontsize ? `${fontsize}` : "")};
  border: var(--border-sizeButton) solid var(--color-black);
  border-radius: 5px;
  padding: 0.1rem;
  margin: 0.1rem;
`;
