import { useState } from "react";
import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled";

export default function Popup() {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledPopup>
      <PartCardFlexContainer align="center">input</PartCardFlexContainer>
      <PartCardFlexContainer direction="row" justify="space-around">
        <button>abbrechen</button>
        <button>bestätigen</button>
      </PartCardFlexContainer>
    </StyledPopup>
  );
}
