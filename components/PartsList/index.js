import PartCard from "../PartCard";
import { PartsListContainer, StyledHeading } from "./PartsList.styled";

export default function PartsList({ parts }) {
  return (
    <PartsListContainer>
      <StyledHeading>PARTS</StyledHeading>
      {parts.map((part) => {
        return <PartCard key={part.id} part={part} />;
      })}
    </PartsListContainer>
  );
}
