import { FormContainer, Input, Label } from "../PartForm/PartForm.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";

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
    event.target.reset();
  }

  return (
    <FormContainer
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      flex
      direction="column"
    >
      <Label htmlFor="name">
        {defaultData ? `"${defaultData.name}" bearbeiten` : "neue Kategorie"}
      </Label>
      <PartCardFlexContainer direction="row" justify="flex-start">
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
          maxLength={15}
          spellCheck
          required
        />
        <button type="submit">{defaultData ? "ok ✓" : "hinzufügen"}</button>
      </PartCardFlexContainer>
    </FormContainer>
  );
}
