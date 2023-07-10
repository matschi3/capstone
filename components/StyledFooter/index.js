import { StyledFooterElement } from "./StyledFooter.styled.js";
import LinkTo from "../LinkTo/index.js";

export default function StyledFooter() {
  return (
    <StyledFooterElement>
      <LinkTo href="/" name="TEILE" color="var(--color-part)" fontsize="20px" />
      <LinkTo
        href="/items"
        name="ITEMS"
        color="var(--color-item)"
        fontsize="20px"
      />
      <LinkTo
        href="/categories"
        name="KATEGORIEN"
        color="var(--color-category)"
        fontsize="20px"
      />
    </StyledFooterElement>
  );
}
