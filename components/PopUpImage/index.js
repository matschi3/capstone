import { StyledPopup } from "../Popup/Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import { FormContainer, Label, Input } from "../PartForm/PartForm.styled.js";

export default function PopUpImage({
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
        <FormContainer aria-labelledby="file" onSubmit={handleImageUpload}>
          <Label htmlFor="file">Foto</Label>
          <Input id="file" name="file" type="file" />
          <button type="submit">Foto hochladen</button>
          <p>{uploadStatus}</p>
          {error && <p>{error.message}</p>}
        </FormContainer>
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
