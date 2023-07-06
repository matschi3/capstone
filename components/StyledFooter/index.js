import { StyledFooterElement, StyledNavigation } from "./StyledFooter.styled";
import LinkTo from "../LinkTo/index.js";

export default function StyledFooter() {
  return (
    <StyledFooterElement>
      <StyledNavigation>
        <LinkTo href="/" name="TEILE" color="var(--color-part)" />
        <LinkTo href="/items" name="ITEMS" color="var(--color-item)" />
        hello, im the footer
      </StyledNavigation>
    </StyledFooterElement>
  );
}
