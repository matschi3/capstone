import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";

export default function Popup({ id }) {
  return isActive ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">input</PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <StyledButton onClick={onClosePopup}>abbrechen</StyledButton>
        <StyledButton>bestätigen</StyledButton>
      </PartCardFlexContainer>
    </StyledPopup>
  ) : null;
}
