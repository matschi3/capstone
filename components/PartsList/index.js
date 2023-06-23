import PartCard from "../PartCard";
import { PartsListContainer } from "./PartsList.styled";

export default function PartsList({ parts }) {
  return (
    <PartsListContainer>
      {parts.map((part) => {
        return <PartCard key={part.id} part={part} />;
      })}
    </PartsListContainer>
  );
}
