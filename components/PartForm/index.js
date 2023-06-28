import { categories } from "../../lib/categories.js";
import { FormContainer, Label, Input, Select } from "./PartForm.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";

export default function PartForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const allDate = new Date();
    const day = allDate.getDate();
    const month = allDate.getMonth() + 1;
    const year = allDate.getFullYear();
    const todayDate = day + "." + month + "." + year;

    const newPart = {
      name: data.name,
      dateBuy: todayDate,
      dateSold: "",
      category: data.category,
      currency: "EUR",
      purchasingPrice: data.purchasingPrice,
      imgUrl:
        "https://res.cloudinary.com/dn4pswuzt/image/upload/v1687168427/test/teller_adog0o.jpg",
      partOrigin: data.partOrigin,
      inAssembler: false,
      isAssembled: false,
      isSold: false,
    };

    onSubmit(newPart);
  }

  return (
    <PartsListContainer>
      <PartCardFlexContainer border={"var(--color-part)"}>
        <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            defaultValue={defaultData?.name}
            required
          />

          <Label htmlFor="category">Kategorie</Label>
          <Select
            name="category"
            id="category"
            defaultValue={defaultData?.category}
            required
          >
            <option value="">hier auswählen</option>
            {categories.map((category) => (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            ))}
          </Select>

          <Label htmlFor="purchasingPrice">Kaufpreis</Label>
          <Input
            id="purchasingPrice"
            name="purchasingPrice"
            type="number"
            step="0.01"
            defaultValue={defaultData?.purchasingPrice}
            required
          />

          <Label htmlFor="partOrigin">Fundort</Label>
          <Input
            id="partOrigin"
            name="partOrigin"
            type="text"
            defaultValue={defaultData?.partOrigin}
          />
          <button type="submit">
            {defaultData ? "bearbeitung bestätigen" : "Teil hinzufügen"}
          </button>
        </FormContainer>
      </PartCardFlexContainer>
    </PartsListContainer>
  );
}
