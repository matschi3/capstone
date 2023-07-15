import { useState } from "react";
import { StyledPopup } from "./Popup.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";

export default function Popup() {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledPopup>
      <PartCardFlexContainer direction="column" justify="flex-start">
        <PartCardFlexContainer>input</PartCardFlexContainer>
        <PartCardFlexContainer>
          <button>abbrechen</button>
          <button>bestätigen</button>
        </PartCardFlexContainer>
      </PartCardFlexContainer>
    </StyledPopup>
  );
}
