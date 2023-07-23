import styled from "styled-components";
import { StyledLink } from "../../components/StyledLink/StyledLink.styled.js";

export const StyledLinkTo = styled(StyledLink)`
  ${(props) => (props.posbt || props.poslr ? "position: fixed" : "")};
  ${(props) => (props.posbt ? `${props.posbt}: 0.2rem` : "")};
  ${(props) => (props.poslr ? `${props.poslr}: 0.2rem` : "")};
  background-color: ${({ color }) =>
    color ? `${color}` : `var(--color-white)`};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
`;
