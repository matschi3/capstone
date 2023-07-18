import PartCard from "../PartCard/index.js";
import { PartsListContainer } from "./PartsList.styled.js";
import { useState } from "react";
import StyledFilter from "../StyledFilter/index.js";
import { FilterContainer } from "../StyledFilter/StyledFilter.styled.js";

export default function PartsList({ parts }) {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // filter the parts array based on the categoryFilter and statusFilter
  const filteredParts = parts.filter((part) => {
    if (categoryFilter === "all" || part.category[0]?.name === categoryFilter) {
      if (statusFilter === "all") {
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
        {/* renders a filterButton for each object in 'options' with given 'value'and 'label' */}
        <StyledFilter
          options={[
            {
              value: "all",
              label: "alle",
            },
            {
              value: "teller",
              label: "teller",
            },
            {
              value: "vase",
              label: "vase",
            },
            {
              value: "schüssel",
              label: "schüssel",
            },
            {
              value: "figur",
              label: "figur",
            },
          ]}
          value={categoryFilter}
          onChange={(newSorting) => {
            setCategoryFilter(newSorting);
          }}
        />
        <StyledFilter
          options={[
            {
              value: "all",
              label: "alle",
            },
            {
              value: "!isAssembled",
              label: "unverbaut",
            },
            {
              value: "inAssembler",
              label: "in Verarbeitung",
            },
            {
              value: "isAssembled",
              label: "verbaut",
            },
            {
              value: "isSold",
              label: "verkauft",
            },
          ]}
          value={statusFilter}
          onChange={(newSorting) => {
            setStatusFilter(newSorting);
          }}
        />
      </FilterContainer>
      <PartsListContainer>
        {/* render PartCard for each object in 'filteredParts' with given 'part' */}
        {filteredParts.length === 0 ? (
          <p>Keine Teile für gewählte Filter gefunden</p>
        ) : (
          filteredParts.map((part) => <PartCard key={part._id} part={part} />)
        )}
      </PartsListContainer>
    </>
  );
}
