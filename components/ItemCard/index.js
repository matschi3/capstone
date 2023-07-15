import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import Popup from "../Popup/index.js";
import { useState } from "react";

export default function ItemCard({ item }) {
  const [isTargetPricePopupActive, setIsTargetPricePopupActive] =
    useState(false);
  const [inputValue, setInputValue] = useState(null);
  const closeTargetPricePopup = () => setIsTargetPricePopupActive(false);
  async function handleConfirm() {
    console.log(inputValue);

    const response = await fetch(`/api/items/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ targetPrice: inputValue }),
    });
    closeTargetPricePopup();
  }

  return (
    <>
      <PartsListContainer borderColor="var(--color-item)">
        <PartCardFlexContainer direction="row" justify="flex-start">
          <PartCardImage
            src={item.imgUrl}
            alt={item.name}
            width={100}
            height={100}
          />
          <PartCardFlexContainer direction="column" justify="flex-start">
            <PartCardText>{item.dateAssembled}</PartCardText>
            <PartCardText>
              {item.totalPurchasingPrice} {item.currency}
            </PartCardText>
          </PartCardFlexContainer>
          <PartCardFlexContainer direction="column" justify="flex-start">
            <StyledButton onClick={() => setIsTargetPricePopupActive(true)}>
              VK einstellen
            </StyledButton>
          </PartCardFlexContainer>
        </PartCardFlexContainer>
        {/* render miniPartCard for each part in populated item.parts (parts of item */}
        {item.parts.map((part) => (
          <PartCard key={part._id} part={part} isMini />
        ))}
      </PartsListContainer>
      <Popup
        id={item._id}
        name="VK-soll-Preis einstellen"
        inputName="targetPrice"
        isActive={isTargetPricePopupActive}
        setInputValue={setInputValue}
        onCancel={closeTargetPricePopup}
        onConfirm={handleConfirm}
      />
    </>
  );
}
