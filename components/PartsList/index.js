import PartCard from "../PartCard";
import { PartsListContainer, StyledHeading } from "./PartsList.styled";
import { useState } from "react";

export default function PartsList({ parts }) {
  return (
    <>
      <StyledHeading>PARTS</StyledHeading>
      <section>
        <button>alle</button>
        <button>teller</button>
        <button>vase</button>
        <button>schüssel</button>
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
