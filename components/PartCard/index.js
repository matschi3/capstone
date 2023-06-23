import Image from "next/image";
import { PartCardFlexContainer, PartCardCategory } from "./PartCard.styled";

export default function PartCard({ part }) {
  return (
    <PartCardFlexContainer direction={"column"}>
      <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
      <p>Einkaufspreis: {part.purchasingPrice}</p>
      <p>Name: {part.name}</p>
      <PartCardFlexContainer direction={"row"}>
        <PartCardCategory>{part.category}</PartCardCategory>
      </PartCardFlexContainer>
    </PartCardFlexContainer>
  );
}
