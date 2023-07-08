import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";

export default function ItemCard({ item }) {
  return (
    <PartsListContainer borderColor="var(--color-item)">
      <PartCardFlexContainer direction="row" justify="flex-start">
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
        </PartCardFlexContainer>
      </PartCardFlexContainer>
      {item.parts.map((part) => (
        <PartCard key={part._id} part={part} isMini />
      ))}
    </PartsListContainer>
  );
}
