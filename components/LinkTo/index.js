import { StyledLinkTo } from "./LinkTo.styled";

export default function LinkTo() {
  return (
    <StyledLinkTo href={href} color={color}>
      {name}
    </StyledLinkTo>
  );
}
