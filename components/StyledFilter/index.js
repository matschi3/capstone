import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ sets, activeFilter }) {
  // Mapping over the "sets" array and rendering a FilterButton component for each element with the given "function", "value to set" and "name"
  return (
    <FilterButtonContainer>
      {sets.map((set) => (
        <FilterButton
          key={set.name}
          onClick={() => {
            set.funct(set.value);
            set.funct2(set.value2);
          }}
          isActiveFilter={set.value2 === activeFilter}
        >
          {set.name}
        </FilterButton>
      ))}
    </FilterButtonContainer>
  );
}
