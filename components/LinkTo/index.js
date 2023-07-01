import { StyledLinkTo } from "./LinkTo.styled.js";

export default function LinkTo({ href, name, color, posbt, poslr }) {
  return (
    <StyledLinkTo href={href} color={color} posbt={posbt} poslr={poslr}>
      {name}
    </StyledLinkTo>
  );
}
