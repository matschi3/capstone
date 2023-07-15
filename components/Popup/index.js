import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";
import { Label, Input } from "../PartForm/PartForm.styled.js";

export default function Popup({ id, inputName, isActive, onCancel }) {
  return isActive ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">
        {id}
        <Label htmlFor={inputName}></Label>
        <Input
          type="number"
          step="0.01"
          id={inputName}
          name={inputName}
        ></Input>
      </PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <StyledButton onClick={onCancel}>abbrechen</StyledButton>
        <StyledButton>bestätigen</StyledButton>
      </PartCardFlexContainer>
    </StyledPopup>
  ) : null;
}
