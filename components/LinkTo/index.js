import { StyledLinkTo } from "./LinkTo.styled";

export default function LinkTo({ href, name, color }) {
  return (
    <StyledLinkTo href={href} color={color}>
      {name}
    </StyledLinkTo>
  );
}