/* import { categories } from "../../lib/categories.js"; */
import { FormContainer, Label, Input, Select } from "./PartForm.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import React, { useState } from "react";

export default function PartForm({ onSubmit, formName, defaultData }) {
  // for image Upload; define some states to give some feedback to the user what happened to our upload
  const { mutate } = useSWR("/api/images/");
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);

  // categories fetching for select-dropdown
  const {
    data: categories,
    isLoading,
    error: categoriesError,
  } = useSWR("/api/categories");
  if (isLoading) {
    return <h1>lädt Kategorien...</h1>;
  }
  if (!categories) {
    return <h1>keine Kategorien gefunden.</h1>;
  }
  if (categoriesError) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    // upload image and get url ?!?
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData.image,
      });
      // once the file is uploaded (= the promise in our api upload is resolved)
      if (response.status === 201) {
        // we call mutate to refresh our image data
        const { uploadedImgUrl } = await response.json();
        mutate();
        // and set a successful state
        setUploadStatus("Upload complete!");
      }
    } catch (error) {
      // in case of error, we set the state accordingly
      setError(error);
    }
    console.log(uploadedImgUrl);

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
            // error handling for: parts category got deleted and is not available anymore for listing or editing
            defaultValue={
              defaultData !== undefined
                ? defaultData.category[0]?._id
                : "keine Kategorie"
            }
            required
          >
            <option value="">hier auswählen</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
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
          <Label htmlFor="image">Foto</Label>
          <Input type="file" name="image" id="image" />
          <button type="submit">
            {defaultData ? "bearbeitung bestätigen" : "Teil hinzufügen"}
          </button>
        </FormContainer>
      </PartCardFlexContainer>
    </PartsListContainer>
  );
}
