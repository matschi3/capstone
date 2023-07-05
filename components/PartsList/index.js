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
          filters={[
            {
              functionToSet: setCategoryFilter,
              valueToSet: "alle",
              buttonName: "alle",
              activeFunctionToSet: setActiveCategoryFilter,
              activeValueToSet: "alle",
            },
            {
              functionToSet: setCategoryFilter,
              valueToSet: "teller",
              buttonName: "teller",
              activeFunctionToSet: setActiveCategoryFilter,
              activeValueToSet: "teller",
            },
            {
              functionToSet: setCategoryFilter,
              valueToSet: "vase",
              buttonName: "vase",
              activeFunctionToSet: setActiveCategoryFilter,
              activeValueToSet: "vase",
            },
            {
              functionToSet: setCategoryFilter,
              valueToSet: "schüssel",
              buttonName: "schüssel",
              activeFunctionToSet: setActiveCategoryFilter,
              activeValueToSet: "schüssel",
            },
            {
              functionToSet: setCategoryFilter,
              valueToSet: "figur",
              buttonName: "figur",
              activeFunctionToSet: setActiveCategoryFilter,
              activeValueToSet: "figur",
            },
          ]}
          activeFilter={activeCategoryFilter}
        />
        <StyledFilter
          filters={[
            {
              functionToSet: setStatusFilter,
              valueToSet: "alle",
              buttonName: "alle",
              activeFunctionToSet: setActiveStatusFilter,
              activeValueToSet: "alle",
            },
            {
              functionToSet: setStatusFilter,
              valueToSet: "!isAssembled",
              buttonName: "unverbaut",
              activeFunctionToSet: setActiveStatusFilter,
              activeValueToSet: "!isAssembled",
            },
            {
              functionToSet: setStatusFilter,
              valueToSet: "inAssembler",
              buttonName: "in Verarbeitung",
              activeFunctionToSet: setActiveStatusFilter,
              activeValueToSet: "inAssembler",
            },
            {
              functionToSet: setStatusFilter,
              valueToSet: "isAssembled",
              buttonName: "verbaut",
              activeFunctionToSet: setActiveStatusFilter,
              activeValueToSet: "isAssembled",
            },
            {
              functionToSet: setStatusFilter,
              valueToSet: "isSold",
              buttonName: "verkauft",
              activeFunctionToSet: setActiveStatusFilter,
              activeValueToSet: "isSold",
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
