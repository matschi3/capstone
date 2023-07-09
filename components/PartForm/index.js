/* import { categories } from "../../lib/categories.js"; */
import { FormContainer, Label, Input, Select } from "./PartForm.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";

export default function PartForm({ onSubmit, formName, defaultData }) {
  const { data: categories, isLoading, error } = useSWR("/api/categories");
  if (isLoading) {
    return <h1>lädt Kategorien...</h1>;
  }
  if (!categories) {
    return <h1>keine Kategorien gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // get todays date in Format 'dd.mm.yyyy' IF there is no defaultData (edit-part)
    let todayDate;
    if (!defaultData) {
      todayDate = new Date().toLocaleDateString("de-DE", {
        dateStyle: "medium",
      });
    } else {
      todayDate = defaultData.dateBuy;
    }

    // create new part object
    const newPart = {
      uuid: uuidv4(),
      name: data.name,
      dateBuy: todayDate,
      dateSold: "",
      category: data.category,
      currency: "EUR",
      purchasingPrice: data.purchasingPrice,
      imgUrl: defaultData
        ? defaultData.imgUrl
        : "https://res.cloudinary.com/dn4pswuzt/image/upload/v1687168427/test/teller_adog0o.jpg",
      partOrigin: data.partOrigin,
      inAssembler: false,
      isAssembled: false,
      isSold: false,
    };

    onSubmit(newPart);
  }

  return (
    <PartsListContainer>
      <PartCardFlexContainer border="var(--color-part)">
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
              <option key={category.name} value={category.name}>
                {category.name}
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
