import { StyledLinkTo } from "./LinkTo.styled.js";

export default function LinkTo({ href, name, color }) {
  return (
    <StyledLinkTo href={href} color={color}>
      {name}
    </StyledLinkTo>
  );
}
