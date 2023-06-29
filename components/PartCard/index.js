import Image from "next/image";
import Link from "next/link.js";
import { PartCardFlexContainer, PartCardCategory } from "./PartCard.styled.js";
import StatusMarker from "../StatusMarker/index.js";

export default function PartCard({ part, isDetail }) {
  return (
    <PartCardFlexContainer direction={"column"} border={"blue"}>
      <PartCardFlexContainer direction={"row"}>
        <Link href={!isDetail ? `${part.uuid}` : `/`}>
          <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
        </Link>
        <PartCardFlexContainer direction={"column"}>
          <p>Einkaufspreis: {part.purchasingPrice}</p>
          <p>Name: {part.name}</p>
        </PartCardFlexContainer>
      </PartCardFlexContainer>
      <PartCardFlexContainer direction={"row"}>
        <PartCardCategory>{part.category}</PartCardCategory>
        <StatusMarker part={part} />
      </PartCardFlexContainer>
    </PartCardFlexContainer>
  );
}
