import PartCard from "../PartCard/index.js";
import {
  PartsListContainer,
  FilterButtonContainer,
  FilterContainer,
} from "./PartsList.styled.js";
import { useState } from "react";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("alle");
  const [statusFilter, setStatusFilter] = useState("alle");

  const filteredParts = parts.filter((part) => {
    if (categoryFilter === "alle" || part.category === categoryFilter) {
      if (statusFilter === "alle") {
        return part;
      } else if (statusFilter === "!isAssembled") {
        return part.isAssembled === false;
      } else if (statusFilter === "inAssembler") {
        return part.inAssembler;
      } else if (statusFilter === "isAssembled") {
        return part.isAssembled;
      } else if (statusFilter === "isSold") {
        return part.isSold;
      }
    }
    return false;
  });

  return (
    <>
      <FilterContainer>
        <FilterButtonContainer>
          <button onClick={() => setCategoryFilter("alle")}>alle</button>
          <button onClick={() => setCategoryFilter("teller")}>teller</button>
          <button onClick={() => setCategoryFilter("vase")}>vase</button>
          <button onClick={() => setCategoryFilter("schüssel")}>
            schüssel
          </button>
          <button onClick={() => setCategoryFilter("figur")}>figur</button>
        </FilterButtonContainer>
        <FilterButtonContainer>
          <button onClick={() => setStatusFilter("alle")}>alle</button>
          <button onClick={() => setStatusFilter("!isAssembled")}>
            unverbaut
          </button>
          <button onClick={() => setStatusFilter("inAssembler")}>
            in Verarbeitung
          </button>
          <button onClick={() => setStatusFilter("isAssembled")}>
            verbaut
          </button>
          <button onClick={() => setStatusFilter("isSold")}>verkauft</button>
        </FilterButtonContainer>
      </FilterContainer>
      <PartsListContainer>
        {filteredParts.length === 0 ? (
          <p>Keine Teile für gewählte Filter gefunden</p>
        ) : (
          filteredParts.map((part) => <PartCard key={part.id} part={part} />)
        )}
      </PartsListContainer>
    </>
  );
}
