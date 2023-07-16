import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import Popup from "../Popup/index.js";
import React, { useState } from "react";
import useSWR from "swr";

export default function ItemCard({ item }) {
  const { mutate } = useSWR(`/api/items`);
  // states + close-function for popup's
  const [isTargetPricePopupActive, setIsTargetPricePopupActive] =
    useState(false);
  const [isSoldForPricePopupActive, setIsSoldForPricePopupActive] =
    useState(false);
  const [inputValue, setInputValue] = useState(null);
  const closeAllPopups = () => {
    setIsTargetPricePopupActive(false);
    setIsSoldForPricePopupActive(false);
  };

  // handle confirm of popup (set item data) with entered inputValue and the keyToChange
  async function handleConfirm(keyToChange) {
    const editedItem = { ...item, [keyToChange]: inputValue };
    try {
      const response = await fetch(`/api/items/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedItem),
      });
      if (response.ok) {
        closeAllPopups();
        mutate();
      } else {
        alert("Fehler beim setzen des neuen Wertes");
      }
    } catch (error) {
      alert("Fehler beim Zugriff auf Datenbank");
    }
  }

  return (
    <>
      <PartsListContainer borderColor="var(--color-item)">
        <PartCardFlexContainer direction="row" justify="space-between">
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
            {item.targetPrice ? (
              <>
                <PartCardText>
                  {"VK(soll): "}
                  {item.targetPrice} {item.currency}
                </PartCardText>
                <PartCardText>
                  {"Gewinn(soll): "}
                  {item.targetPrice - item.totalPurchasingPrice} {item.currency}
                </PartCardText>
              </>
            ) : null}
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
        keyToChange="targetPrice"
        isActive={isTargetPricePopupActive}
        setInputValue={setInputValue}
        onCancel={closeTargetPricePopup}
        onConfirm={handleConfirm}
      />
    </>
  );
}
