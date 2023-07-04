import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ sets }) {
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
