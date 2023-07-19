import {
  PartCardCategory,
  PartCardFlexContainer,
} from "../PartCard/PartCard.styled.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import { useState } from "react";
import CategoryForm from "../CategoryForm/index.js";
import { toast } from "react-toastify";

export default function CategoryCard({ category }) {
  const [isEdit, setIsEdit] = useState(false);

  async function handleEditCategory(newCategory) {
    const id = category._id;
    const response = await fetch(`/api/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    toast("✅ Kategorie erfolgreich bearbeitet");
    setIsEdit(!isEdit);
  }

  async function handleDeleteCategory() {
    const id = category._id;
    const response = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });
    alert("Kategorie erfolgreich gelöscht");
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
          <StyledButton onClick={() => setIsEdit(!isEdit)}>
            bearbeiten
          </StyledButton>
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
