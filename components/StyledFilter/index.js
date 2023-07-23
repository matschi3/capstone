import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled.js";

export default function StyledFilter({ options, value, onChange }) {
  return (
    <FilterButtonContainer>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => {
            onChange(option.value);
          }}
          isActiveFilter={value === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterButtonContainer>
  );
}
