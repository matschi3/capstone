import PartCard from "../PartCard";
import { PartsListContainer, StyledHeading } from "./PartsList.styled";
import { useState } from "react";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("alle");

  return (
    <>
      <StyledHeading>PARTS</StyledHeading>
      <section>
        <button onClick={() => setCategoryFilter("alle")}>alle</button>
        <button onClick={() => setCategoryFilter("teller")}>teller</button>
        <button onClick={() => setCategoryFilter("vase")}>vase</button>
        <button onClick={() => setCategoryFilter("schüssel")}>schüssel</button>
        <button>figur</button>
      </section>
      <PartsListContainer>
        {parts.map((part) => {
          return <PartCard key={part.id} part={part} />;
        })}
      </PartsListContainer>
    </>
  );
}
