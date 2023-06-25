import PartCard from "../PartCard";
import {
  PartsListContainer,
  StyledHeading,
  FilterButtonContainer,
} from "./PartsList.styled";
import { useState } from "react";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("alle");
  const [statusFilter, setStatusFilter] = useState("alle");

  const filteredParts = parts.filter((part) => {
    if (categoryFilter === "alle" || part.category === categoryFilter)
      return true;
  });

  return (
    <>
      <StyledHeading>PARTS</StyledHeading>
      <FilterButtonContainer>
        <button onClick={() => setCategoryFilter("alle")}>alle</button>
        <button onClick={() => setCategoryFilter("teller")}>teller</button>
        <button onClick={() => setCategoryFilter("vase")}>vase</button>
        <button onClick={() => setCategoryFilter("schüssel")}>schüssel</button>
        <button onClick={() => setCategoryFilter("figur")}>figur</button>
      </FilterButtonContainer>
      <FilterButtonContainer>
        <button onClick={() => setStatusFilter("alle")}>alle</button>
        <button>in Verarbeitung</button>
        <button>verbaut</button>
        <button>verkauft</button>
      </FilterButtonContainer>
      <PartsListContainer>
        {filteredParts.map((part) => {
          return <PartCard key={part.id} part={part} />;
        })}
      </PartsListContainer>
    </>
  );
}
