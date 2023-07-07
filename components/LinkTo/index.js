import { StyledLinkTo } from "./LinkTo.styled.js";

export default function LinkTo({ href, name, color, posbt, poslr, fontsize }) {
  return (
    <StyledLinkTo
      href={href}
      color={color}
      posbt={posbt}
      poslr={poslr}
      fontsize={fontsize}
    >
      {name}
    </StyledLinkTo>
  );
}
