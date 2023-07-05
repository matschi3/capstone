import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ filters, activeFilter }) {
  // Mapping over given "filters" array of objects and rendering a FilterButton component for each element with the given "functionToSet", "valueToSet" and "buttonName"
  return (
    <FilterButtonContainer>
      {filters.map((filter) => (
        <FilterButton
          key={filter.buttonName}
          onClick={() => {
            filter.functionToSet(filter.valueToSet);
            filter.activeFunctionToSet(filter.activeValueToSet);
          }}
          isActiveFilter={filter.activeValueToSet === activeFilter}
        >
          {filter.buttonName}
        </FilterButton>
      ))}
    </FilterButtonContainer>
  );
}
