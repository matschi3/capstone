import Link from "next/link.js";
import {
  PartCardFlexContainer,
  PartCardCategory,
  PartCardImage,
  PartCardText,
} from "./PartCard.styled.js";
import StatusMarker from "../StatusMarker/index.js";

export default function PartCard({ part, isDetail }) {
  return (
    <PartCardFlexContainer direction={"column"} border={"blue"}>
      <PartCardFlexContainer direction={"row"}>
        <Link href={!isDetail ? `${part.uuid}` : `/`}>
          <PartCardImage
            src={part.imgUrl}
            alt={part.name}
            width={100}
            height={100}
          />
        </Link>
        <PartCardFlexContainer direction={"column"}>
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
      </PartCardFlexContainer>
      <PartCardFlexContainer direction={"row"}>
        <PartCardCategory>{part.category}</PartCardCategory>
        <StatusMarker part={part} />
      </PartCardFlexContainer>
    </PartCardFlexContainer>
  );
}
