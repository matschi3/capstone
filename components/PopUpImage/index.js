import { StyledPopup } from "../Popup/Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import { FormContainer, Label, Input } from "../PartForm/PartForm.styled.js";
import { useState } from "react";

export default function PopUpImage({
  id,
  name,
  keyToChange,
  isActive,
  setInputValue,
  onCancel,
  onConfirm,
}) {
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  async function handleImageUpload(event) {
    setUploadStatus("Foto upload lädt...");
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.status === 201) {
        setUploadStatus("Upload erfolgreich!");
        const result = await response.json();
        const url = result.url;
        mutate();
        setInputValue(url);
      }
    } catch (error) {
      setUploadStatus(null);
      setError(error);
    }
  }

  return isActive ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">
        {id}
        <FormContainer aria-labelledby="file" onSubmit={handleImageUpload}>
          <Label htmlFor="file">{name}</Label>
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
