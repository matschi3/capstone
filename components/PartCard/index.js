import Image from "next/image";
import { PartCardFlexContainer, PartCardCategory } from "./PartCard.styled";
import StatusMarker from "../StatusMarker";

export default function PartCard({ part }) {
  return (
    <PartCardFlexContainer direction={"column"} border={"blue"}>
      <PartCardFlexContainer direction={"row"}>
        <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
        <PartCardFlexContainer direction={"column"}>
          <p>Einkaufspreis: {part.purchasingPrice}</p>
          <p>Name: {part.name}</p>
        </PartCardFlexContainer>
      </PartCardFlexContainer>
      <PartCardFlexContainer direction={"row"}>
        <PartCardCategory>{part.category}</PartCardCategory>
      </PartCardFlexContainer>
    </PartCardFlexContainer>
  );
}
