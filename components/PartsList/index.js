import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "./PartsList.styled.js";
import { useState } from "react";
import StyledFilter from "../StyledFilter/index.js";
import { FilterContainer } from "../StyledFilter/StyledFilter.styled.js";

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
        <StyledFilter
          sets={[
            { funct: setCategoryFilter, value: "alle", name: "alle" },
            { funct: setCategoryFilter, value: "teller", name: "teller" },
            { funct: setCategoryFilter, value: "vase", name: "vase" },
            { funct: setCategoryFilter, value: "schüssel", name: "schüssel" },
            { funct: setCategoryFilter, value: "figur", name: "figur" },
          ]}
        />
        <StyledFilter
          sets={[
            { funct: setStatusFilter, value: "alle", name: "alle" },
            {
              funct: setStatusFilter,
              value: "!isAssembled",
              name: "unverbaut",
            },
            {
              funct: setStatusFilter,
              value: "inAssembler",
              name: "in Verarbeitung",
            },
            { funct: setStatusFilter, value: "isAssembled", name: "verbaut" },
            { funct: setStatusFilter, value: "isSold", name: "verkauft" },
          ]}
        />

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
          filteredParts.map((part) => <PartCard key={part.uuid} part={part} />)
        )}
      </PartsListContainer>
    </>
  );
}
