import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";
import { Label, Input } from "../PartForm/PartForm.styled.js";
import { useEffect, useRef } from "react";

export default function Popup({
  id,
  name,
  keyToChange,
  isActive,
  inputValue,
  setInputValue,
  onCancel,
  onConfirm,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isActive === keyToChange) {
      inputRef.current.focus();
    }
  }, [isActive, keyToChange]);

  return isActive === keyToChange ? (
    <StyledPopup>
      <PartCardFlexContainer align="center">
        {id}
        <Label htmlFor={keyToChange}>{name}</Label>
        <Input
          ref={inputRef}
          type="number"
          id={keyToChange}
          name={keyToChange}
          onChange={(event) => setInputValue(event.target.value)}
        ></Input>
      </PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <StyledButton
          onClick={
            inputValue >= 0 && inputValue <= 1000
              ? () => onConfirm(keyToChange)
              : onCancel
          }
        >
          {inputValue > 0 && inputValue <= 1000
            ? "VK-Preis einstellen"
            : inputValue === "0"
            ? "mit 0 resetten"
            : "abbrechen"}
        </StyledButton>
      </PartCardFlexContainer>
    </StyledPopup>
  ) : null;
}
