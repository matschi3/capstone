import {
  PartCardCategory,
  PartCardFlexContainer,
} from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import { useState } from "react";
import CategoryForm from "../CategoryForm/index.js";

export default function CategoryCard({ category }) {
  const [isEdit, setIsEdit] = useState(false);

  async function handleEditCategory() {
    console.log("edit category");
  }

  async function handleDeleteCategory() {
    console.log("delete category");
  }

  return (
    <>
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
      {!isEdit ? null : (
        <CategoryForm
          onSubmit={handleEditCategory}
          formName="edit-category"
          defaultData={category}
        />
      )}
    </>
  );
}
