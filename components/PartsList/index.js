import PartCard from "../PartCard";
import { PartsListContainer, StyledHeading } from "./PartsList.styled";
import { useState } from "react";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("alle");

  const filteredParts = parts.filter((part) => {
    if (categoryFilter === "alle" || part.category === categoryFilter)
      return true;
  });

  return (
    <>
      <StyledHeading>PARTS</StyledHeading>
      <section>
        <button onClick={() => setCategoryFilter("alle")}>alle</button>
        <button onClick={() => setCategoryFilter("teller")}>teller</button>
        <button onClick={() => setCategoryFilter("vase")}>vase</button>
        <button onClick={() => setCategoryFilter("schüssel")}>schüssel</button>
        <button onClick={() => setCategoryFilter("figur")}>figur</button>
      </section>
      <PartsListContainer>
        {parts.map((part) => {
          return <PartCard key={part.id} part={part} />;
        })}
      </PartsListContainer>
    </>
  );
}
