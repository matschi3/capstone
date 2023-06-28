import styled from "styled-components";
import { StyledLink } from "../StyledLink/StyledLink.styled";

export const StyledLinkTo = styled(StyledLink)`
  position: fixed;
  top: 0.2rem;
  right: 0.2rem;
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
`;
