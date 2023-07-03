import PartCard from "../PartCard/index.js";
import usePartStore from "../UseStore/UsePartStore.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";

export default function ItemCard({ item }) {
  const { parts, setParts } = usePartStore();
  return (
    <PartsListContainer borderColor="var(--color-item)">
      <PartCardFlexContainer direction="row" justify="flex-start">
        <PartCardImage
          src={item.imgUrl}
          alt={item.name}
          width={100}
          height={100}
        />
        <PartCardText>{item.dateAssembled}</PartCardText>
      </PartCardFlexContainer>
      {parts
        .filter((part) => item.parts.includes(part.uuid))
        .map((part) => (
          <PartCard key={part.uuid} part={part} isMini />
        ))}
    </PartsListContainer>
  );
}
