import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ sets }) {
  // Mapping over the "sets" array and rendering a FilterButton component for each element
  return (
    <FilterButtonContainer>
      {sets.map((set) => (
        <FilterButton key={set.name} onClick={() => set.funct(set.value)}>
          {set.name}
        </FilterButton>
      ))}
    </FilterButtonContainer>
  );
}
