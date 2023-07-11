import { FormContainer, Input, Label } from "../PartForm/PartForm.styled.js";

export default function CategoryForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // create new category object
    const newCategory = {
      name: data.name,
      text: `Kategorie für ${data.name}`,
    };
    onSubmit(newCategory);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="name">neue Kategorie</Label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
        required
      />
      <button type="submit">
        {defaultData ? "bearbeiten ✓" : "hinzufügen"}
      </button>
    </FormContainer>
  );
}
