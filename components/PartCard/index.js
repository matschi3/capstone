import Link from "next/link.js";
import {
  PartCardFlexContainer,
  PartCardCategory,
  PartCardImage,
  PartCardText,
} from "./PartCard.styled.js";
import StatusMarker from "../StatusMarker/index.js";
import usePartStore from "../UseStore/UsePartStore.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";

export default function PartCard({ part, isDetail, isMini }) {
  function toggleInAssembler() {
    usePartStore.getState().togglePartValue(part.uuid, "inAssembler");
  }

  return (
    <>
      {isMini ? (
        <PartCardFlexContainer
          direction="row"
          border="blue"
          justify="flex-start"
        >
          <PartCardFlexContainer width="15%"></PartCardFlexContainer>
          <PartCardImage
            src={part.imgUrl}
            alt={part.category}
            width={100}
            height={100}
          />
          <PartCardFlexContainer direction="column" justify="flex-start">
            <PartCardText>
              EK: {part.purchasingPrice} {part.currency}
            </PartCardText>
            <PartCardFlexContainer direction="row" justify="flex-start">
              <PartCardCategory>{part.category}</PartCardCategory>
            </PartCardFlexContainer>
          </PartCardFlexContainer>
        </PartCardFlexContainer>
      ) : (
        <PartCardFlexContainer direction="column" border="blue">
          <PartCardFlexContainer direction="row" justify="space-between">
            <Link href={!isDetail ? `${part.uuid}` : `/`}>
              <PartCardImage
                src={part.imgUrl}
                alt={part.category}
                width={100}
                height={100}
              />
            </Link>
            <PartCardFlexContainer direction="column" justify="flex-start">
              <PartCardText>Name: {part.name}</PartCardText>
              <PartCardText>
                EK Preis: {part.purchasingPrice} {part.currency}
              </PartCardText>

              {!isDetail ? (
                ""
              ) : (
                <>
                  <PartCardText>EK Ort: {part.partOrigin}</PartCardText>
                  <PartCardText>EK Tag: {part.dateBuy}</PartCardText>
                  <PartCardText>VK Tag: {part.dateSold}</PartCardText>
                  <PartCardText>uuid: {part.uuid}</PartCardText>
                </>
              )}
            </PartCardFlexContainer>
            <PartCardFlexContainer direction="column" justify="flex-start">
              <StyledButton
                onClick={toggleInAssembler}
                bordercolor="var(--color-inAssembler)"
              >
                verarbeiten
              </StyledButton>
              {!isDetail ? "" : <StyledButton>bearbeiten</StyledButton>}
            </PartCardFlexContainer>
          </PartCardFlexContainer>
          <PartCardFlexContainer direction="row" justify="flex-start">
            <PartCardCategory>{part.category}</PartCardCategory>
            <StatusMarker part={part} />
          </PartCardFlexContainer>
        </PartCardFlexContainer>
      )}
    </>
  );
}
