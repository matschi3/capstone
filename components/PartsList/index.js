import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "./PartsList.styled.js";
import { useState } from "react";
import StyledFilter from "../StyledFilter/index.js";
import { FilterContainer } from "../StyledFilter/StyledFilter.styled.js";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("alle");
  const [statusFilter, setStatusFilter] = useState("alle");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("alle");
  const [activeStatusFilter, setActiveStatusFilter] = useState("alle");

  // filter the parts array based on the categoryFilter and statusFilter
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
        {/* render a filterButton for each object in 'sets' with given 'function', 'value to set' and 'name' */}
        {/* funct2 + value2 for activeFilter-highlighting */}
        <StyledFilter
          sets={[
            {
              funct: setCategoryFilter,
              value: "alle",
              name: "alle",
              funct2: setActiveCategoryFilter,
              value2: "alle",
            },
            {
              funct: setCategoryFilter,
              value: "teller",
              name: "teller",
              funct2: setActiveCategoryFilter,
              value2: "teller",
            },
            {
              funct: setCategoryFilter,
              value: "vase",
              name: "vase",
              funct2: setActiveCategoryFilter,
              value2: "vase",
            },
            {
              funct: setCategoryFilter,
              value: "schüssel",
              name: "schüssel",
              funct2: setActiveCategoryFilter,
              value2: "schüssel",
            },
            {
              funct: setCategoryFilter,
              value: "figur",
              name: "figur",
              funct2: setActiveCategoryFilter,
              value2: "figur",
            },
          ]}
          activeFilter={activeCategoryFilter}
        />
        <StyledFilter
          sets={[
            {
              funct: setStatusFilter,
              value: "alle",
              name: "alle",
              funct2: setActiveStatusFilter,
              value2: "alle",
            },
            {
              funct: setStatusFilter,
              value: "!isAssembled",
              name: "unverbaut",
              funct2: setActiveStatusFilter,
              value2: "!isAssembled",
            },
            {
              funct: setStatusFilter,
              value: "inAssembler",
              name: "in Verarbeitung",
              funct2: setActiveStatusFilter,
              value2: "inAssembler",
            },
            {
              funct: setStatusFilter,
              value: "isAssembled",
              name: "verbaut",
              funct2: setActiveStatusFilter,
              value2: "isAssembled",
            },
            {
              funct: setStatusFilter,
              value: "isSold",
              name: "verkauft",
              funct2: setActiveStatusFilter,
              value2: "isSold",
            },
          ]}
          activeFilter={activeStatusFilter}
        />
      </FilterContainer>
      <PartsListContainer>
        {/* render PartCard for each object in 'filteredParts' with given 'part' */}
        {filteredParts.length === 0 ? (
          <p>Keine Teile für gewählte Filter gefunden</p>
        ) : (
          filteredParts.map((part) => <PartCard key={part.uuid} part={part} />)
        )}
      </PartsListContainer>
    </>
  );
}
