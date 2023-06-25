import PartCard from "../PartCard";
import { PartsListContainer, StyledHeading } from "./PartsList.styled";

export default function PartsList({ parts }) {
  return (
    <>
      <StyledHeading>PARTS</StyledHeading>
      <PartsListContainer>
        {parts.map((part) => {
          return <PartCard key={part.id} part={part} />;
        })}
      </PartsListContainer>
    </>
  );
}
