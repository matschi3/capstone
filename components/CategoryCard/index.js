import {
  PartCardCategory,
  PartCardFlexContainer,
} from "../components/PartCard/PartCard.styled.js";
import { StyledButton } from "../components/StyledButton/StyledButton.styled.js";

export default function CategoryCard({ category }) {
  async function handleEditCategory() {
    console.log("edit category");
  }

  async function handleDeleteCategory() {
    console.log("delete category");
  }

  return (
    <PartCardFlexContainer
      key={category._id}
      direction="row"
      justify="space-between"
    >
      <PartCardCategory>{category.name}</PartCardCategory>
      <PartCardFlexContainer direction="row" justify="flex-start">
        <StyledButton onClick={handleEditCategory}>bearbeiten</StyledButton>
        <StyledButton
          onClick={handleDeleteCategory}
          borderColor="var(--color-red)"
        >
          löschen
        </StyledButton>
      </PartCardFlexContainer>
    </PartCardFlexContainer>
  );
}
