import styled from "styled-components";
import { StyledLink } from "../../components/StyledLink/StyledLink.styled.js";

export const StyledLinkTo = styled(StyledLink)`
  ${(props) => (props.posbt || props.poslr ? "position: fixed" : "")};
  ${(props) => props.posbt || "top"}: 0.2rem;
  ${(props) => props.poslr || "right"}: 0.2rem;
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
`;
