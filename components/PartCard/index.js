import Image from "next/image";
import { PartCardFlexContainer } from "./PartCard.styled";

export default function PartCard({ part }) {
  return (
    <PartCardFlexContainer direction={"row"}>
      <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
      <p>Einkaufspreis: {part.purchasingPrice}</p>
      <p>Name: {part.name}</p>
      <p>{part.category}</p>
    </PartCardFlexContainer>
  );
}
