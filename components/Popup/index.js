import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";
import { Label, Input } from "../PartForm/PartForm.styled.js";

export default function Popup({ id, isActive, onCancel }) {
  return isActive ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">input</PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <StyledButton onClick={onCancel}>abbrechen</StyledButton>
        <StyledButton>bestätigen</StyledButton>
      </PartCardFlexContainer>
    </StyledPopup>
  ) : null;
}
