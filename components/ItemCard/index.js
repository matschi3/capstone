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
import { toast } from "react-toastify";

export default function ItemCard({ item }) {
  const { mutate } = useSWR(`/api/items`);
  const [activePopUp, setActivePopUp] = useState("none");
  const [inputValue, setInputValue] = useState(null);
  // state for image error handling
  const [imageError, setImageError] = useState(false);

  async function handleConfirm(keyToChange) {
    const editedItem =
      keyToChange !== "soldForPrice"
        ? { ...item, [keyToChange]: inputValue }
        : {
            ...item,
            [keyToChange]: inputValue,
            dateSold: new Date(),
            isSold: true,
          };
    try {
      if (keyToChange !== "soldForPrice") {
        const response = await fetch(`/api/items/${item._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedItem),
        });
        if (response.ok) {
          setActivePopUp("none");
          mutate();
          toast("✅ Item erfolgreich editiert");
        } else {
          toast.error("❗️ Fehler beim setzen des neuen Wertes");
        }
      } else if (keyToChange === "soldForPrice" && inputValue > 0) {
        const response = await fetch(`/api/items/${item._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedItem),
        });
        if (response.ok) {
          setActivePopUp("none");
          mutate();
          toast("✅ Item verkauft");
        } else {
          toast.error("❗️ Fehler beim setzen des neuen Wertes");
        }
        item.parts.forEach(function (part) {
          const updatedPart = {
            ...part,
            isSold: true,
            dateSold: new Date(),
          };

          fetch(`/api/parts/${part._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPart),
          }).catch((error) => {
            toast.error(error.message);
          });
        });
      } else if (keyToChange === "soldForPrice" && inputValue === "0") {
        const resetItem = {
          ...item,
          [keyToChange]: inputValue,
          dateSold: "",
          isSold: false,
        };
        const response = await fetch(`/api/items/${item._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(resetItem),
        });
        if (response.ok) {
          setActivePopUp("none");
          mutate();
          toast("✅ Item Verkauf zurückgesetzt");
        } else {
          toast.error("❗️ Fehler beim resetten");
        }
        item.parts.forEach(function (part) {
          const updatedPart = {
            ...part,
            isSold: false,
            dateSold: "",
          };

          fetch(`/api/parts/${part._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPart),
          }).catch((error) => {
            toast.error(error.message);
          });
        });
      } else {
        toast.error("❗️ ungültige Eingabe");
      }
    } catch (error) {
      toast.error("❗️ Fehler beim Zugriff auf Datenbank");
    }
  }
  const noImageDefaultImgUrl =
    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg";
  return (
    <>
      <PartCardFlexContainer
        direction="column"
        justify="space-between"
        border="var(--color-black)"
        minWidth="300px"
        maxWidth="380px"
        isCard
        boxShadow
        cardColor="var(--color-item)"
      >
        <PartCardFlexContainer direction="row" justify="space-between">
          <PartCardImage
            src={item.imgUrl}
            alt={item.name}
            width={100}
            height={100}
            onLoad={() => setImageError(false)}
            onError={() => setImageError(true)}
            style={imageError ? { display: "none" } : {}}
          />
          {imageError && (
            <PartCardImage
              src={noImageDefaultImgUrl}
              alt={item.name}
              width={100}
              height={100}
            />
          )}
          <PartCardFlexContainer direction="column" justify="flex-start">
            <PartCardText>
              {new Date(item.dateAssembled).toLocaleString("de-DE", {
                medium: "medium",
              })}
            </PartCardText>
            <PartCardText>
              {item.totalPurchasingPrice} {item.currency}
            </PartCardText>
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
          <PartCardFlexContainer direction="column" justify="flex-start">
            <StyledButton
              onClick={() => setActivePopUp("imgUrl")}
              backgroundColor="var(--color-highlight)"
            >
              + Foto
            </StyledButton>
            <StyledButton
              onClick={() => setActivePopUp("targetPrice")}
              backgroundColor="var(--color-highlight)"
            >
              VK einstellen
            </StyledButton>
            <StyledButton
              onClick={() => setActivePopUp("soldForPrice")}
              backgroundColor="var(--color-highlight)"
            >
              verkauft...
            </StyledButton>
          </PartCardFlexContainer>
        </PartCardFlexContainer>
        <PartCardFlexContainer direction="row" justify="flex-start">
          <PartCardFlexContainer width="10%"></PartCardFlexContainer>
          <PartCardFlexContainer
            justify="flex-start"
            minWidth="290px"
            maxWidth="370px"
          >
            {item.parts.map((part) => (
              <PartCard key={part._id} part={part} isMini />
            ))}
          </PartCardFlexContainer>
        </PartCardFlexContainer>
      </PartCardFlexContainer>
      <Popup
        id={item._id}
        name="VK-soll-Preis einstellen"
        keyToChange="targetPrice"
        isActive={activePopUp}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onCancel={() => setActivePopUp("none")}
        onConfirm={handleConfirm}
      />
      <Popup
        id={item._id}
        name="VK-ist-Preis einstellen"
        keyToChange="soldForPrice"
        isActive={activePopUp}
        inputValue={inputValue}
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
