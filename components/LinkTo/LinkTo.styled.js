import styled from "styled-components";
import { StyledLink } from "../../components/StyledLink/StyledLink.styled.js";

export const StyledLinkTo = styled(StyledLink)`
  position: fixed;
  ${(props) => props.posBT || "top"}: 0.2rem;
  ${(props) => props.posLR || "right"}: 0.2rem;
  color: ${({ color }) => (color ? `${color}` : `var(--color-black)`)};
`;
