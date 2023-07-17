import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";
import { Label, Input } from "../PartForm/PartForm.styled.js";

export default function Popup({
  id,
  name,
  keyToChange,
  isActive,
  setInputValue,
  onCancel,
  onConfirm,
}) {
  return isActive ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">
        {id}
        <Label htmlFor={keyToChange}>{name}</Label>
        <Input
          type="number"
          step="0.01"
          id={keyToChange}
          name={keyToChange}
          onChange={(event) => setInputValue(event.target.value)}
        ></Input>
      </PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <StyledButton onClick={onCancel}>abbrechen</StyledButton>
        <StyledButton onClick={() => onConfirm(keyToChange)}>
          bestätigen
        </StyledButton>
      </PartCardFlexContainer>
    </StyledPopup>
  ) : null;
}
