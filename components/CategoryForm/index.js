import { FormContainer, Input, Label } from "../PartForm/PartForm.styled.js";

export default function CategoryForm({ onSubmit, formName, defaultData }) {
  return (
    <FormContainer
      aria-labelledby="add new category"
      onSubmit={handleAddCategory}
    >
      <Label htmlFor="name">neue Kategorie</Label>
      <Input id="name" name="name" type="text" required />
      <button type="submit">hinzufügen</button>
    </FormContainer>
  );
}
