import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import Popup from "../Popup/index.js";
import PopUpImage from "../PopUpImage/index.js";
import React, { useState } from "react";
import useSWR from "swr";

export default function ItemCard({ item }) {
  const { mutate } = useSWR(`/api/items`);
  const [activePopUp, setActivePopUp] = useState("none");
  const [inputValue, setInputValue] = useState(null);

  // handle confirm of popups (set item data) with entered inputValue and the keyToChange for multi-purpose
  async function handleConfirm(keyToChange) {
    const editedItem = { ...item, [keyToChange]: inputValue };
    try {
      const response = await fetch(`/api/items/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedItem),
      });
      if (response.ok) {
        setActivePopUp("none");
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
            src={
              item.imgUrl === null
                ? "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg"
                : item.imgUrl
            }
            alt={item.name}
            width={100}
            height={100}
          />
          <PartCardFlexContainer direction="column" justify="flex-start">
            <PartCardText>
              {new Date(item.dateAssembled).toLocaleString("de-DE", {
                medium: "medium",
              })}
            </PartCardText>
            <PartCardText>
              {item.totalPurchasingPrice} {item.currency}
            </PartCardText>
            {/* Ternarys for correct display of Price-information depending on which data has been given */}
            {item.targetPrice && !item.soldForPrice ? (
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
            {item.targetPrice && item.soldForPrice ? (
              <>
                <PartCardText>
                  {"VK(soll): "}
                  {item.targetPrice} {item.currency}
                </PartCardText>
                <PartCardText>
                  {"VK(ist): "}
                  {item.soldForPrice} {item.currency}
                </PartCardText>
                <PartCardText>
                  {"Gewinn(ist): "}
                  {item.soldForPrice - item.totalPurchasingPrice}{" "}
                  {item.currency}
                </PartCardText>
              </>
            ) : null}
            {!item.targetPrice && item.soldForPrice ? (
              <>
                <PartCardText>
                  {"VK(ist): "}
                  {item.soldForPrice} {item.currency}
                </PartCardText>
                <PartCardText>
                  {"Gewinn(ist): "}
                  {item.soldForPrice - item.totalPurchasingPrice}{" "}
                  {item.currency}
                </PartCardText>
              </>
            ) : null}
          </PartCardFlexContainer>
          {/* right hand Buttons */}
          <PartCardFlexContainer direction="column" justify="flex-start">
            <StyledButton onClick={() => setActivePopUp("imgUrl")}>
              + Foto
            </StyledButton>
            <StyledButton onClick={() => setActivePopUp("targetPrice")}>
              VK einstellen
            </StyledButton>
            <StyledButton onClick={() => setActivePopUp("soldForPrice")}>
              verkauft...
            </StyledButton>
          </PartCardFlexContainer>
        </PartCardFlexContainer>
        {/* render miniPartCard for each part in populated item.parts (parts of item) */}
        {item.parts.map((part) => (
          <PartCard key={part._id} part={part} isMini />
        ))}
      </PartsListContainer>
      {/* available PopUps */}
      <Popup
        id={item._id}
        name="VK-soll-Preis einstellen"
        keyToChange="targetPrice"
        isActive={activePopUp}
        setInputValue={setInputValue}
        onCancel={() => setActivePopUp("none")}
        onConfirm={handleConfirm}
      />
      <Popup
        id={item._id}
        name="VK-ist-Preis einstellen"
        keyToChange="soldForPrice"
        isActive={activePopUp}
        setInputValue={setInputValue}
        onCancel={() => setActivePopUp("none")}
        onConfirm={handleConfirm}
      />
      <PopUpImage
        id={item._id}
        name="Foto hinzufügen"
        keyToChange="imgUrl"
        isActive={activePopUp}
        setInputValue={setInputValue}
        onCancel={() => setActivePopUp("none")}
        onConfirm={handleConfirm}
      />
    </>
  );
}
