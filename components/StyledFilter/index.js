import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ sets, activeFilter }) {
  // Mapping over the "sets" array and rendering a FilterButton component for each element with the given "function", "value to set" and "name"
  return (
    <FilterButtonContainer>
      {sets.map((set) => (
        <FilterButton
          key={set.name}
          onClick={() => {
            set.functionToSet(set.valueToSet);
            set.activeFunctionToSet(set.activeValueToSet);
          }}
          isActiveFilter={set.activeValueToSet === activeFilter}
        >
          {set.buttonName}
        </FilterButton>
      ))}
    </FilterButtonContainer>
  );
}
