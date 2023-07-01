import { StyledLinkTo } from "./LinkTo.styled.js";

export default function LinkTo({ href, name, color, posBT, posLR }) {
  return (
    <StyledLinkTo href={href} color={color} posBT={posBT} posLR={posLR}>
      {name}
    </StyledLinkTo>
  );
}
