import { StyledFooterElement } from "./StyledFooter.styled";
import LinkTo from "../LinkTo/index.js";

export default function StyledFooter() {
  return (
    <StyledFooterElement>
      <LinkTo href="/" name="TEILE" color="var(--color-part)" />
      <LinkTo href="/items" name="ITEMS" color="var(--color-item)" />
    </StyledFooterElement>
  );
}
