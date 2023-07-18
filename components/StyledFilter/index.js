import { FilterButtonContainer, FilterButton } from "./StyledFilter.styled";

export default function StyledFilter({ options, value, onChange }) {
  // Mapping over given "filters" array of objects and rendering a FilterButton component for each element with the given 'value' and 'label'
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
