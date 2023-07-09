import { StyledLinkTo } from "./LinkTo.styled.js";

export default function LinkTo({ href, name, color, posbt, poslr, fontSize }) {
  return (
    <StyledLinkTo
      href={href}
      color={color}
      posbt={posbt}
      poslr={poslr}
      fontSize={fontSize}
    >
      {name}
    </StyledLinkTo>
  );
}
