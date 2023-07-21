import { FormContainer, Label, Input, Select } from "./PartForm.styled.js";
import { PartCardFlexContainer } from "../PartCard/PartCard.styled.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function PartForm({ onSubmit, formName, defaultData }) {
  // for image upload
  const { mutate } = useSWR("/api/images");
  const [uploadImageUrl, setUploadImageUrl] = useState(null);
  const [error, setError] = useState(null);

  // get categories for select-options
  const {
    data: categories,
    isLoading: isCategoryLoading,
    error: categoriesError,
  } = useSWR("/api/categories");
  if (isCategoryLoading) {
    return <h1>lädt Kategorien...</h1>;
  }
  if (!categories) {
    return <h1>keine Kategorien gefunden.</h1>;
  }
  if (categoriesError) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  // just handle img upload and set the returned imgUrl into state for use on form submit
  async function handleImageUpload(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await toast.promise(
        fetch("/api/upload", {
          method: "POST",
          body: formData,
        }),
        {
          pending: "Foto hochladen",
          success: "Foto erfolgreich hochgeladen",
          error: "❗️ Fehler beim Upload",
        }
      );
      if (response.status === 201) {
        const result = await response.json();
        const url = result.url;
        mutate();
        setUploadImageUrl(url);
      }
    } catch (error) {
      toast.error("❗️ Fehler beim Upload");
      setError(error);
    }
  }

  // handle submit of form
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // create new part object / or edit existing part object
    const newPart = {
      uuid: defaultData ? data.uuid : uuidv4(),
      name: data.name,
      dateBuy: defaultData ? data.dateBuy : new Date(),
      dateSold: defaultData ? data.dateSold : "",
      category: data.category,
      currency: "EUR",
      purchasingPrice: data.purchasingPrice,
      imgUrl:
        uploadImageUrl !== null
          ? uploadImageUrl
          : defaultData
          ? defaultData.imgUrl
          : "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
      partOrigin: data.partOrigin,
      inAssembler: defaultData ? data.inAssembler : false,
      isAssembled: defaultData ? data.isAssembled : false,
      isSold: defaultData ? data.isSold : false,
    };

    onSubmit(newPart);
  }

  return (
    <PartsListContainer>
      <PartCardFlexContainer border="var(--color-part)">
        <FormContainer aria-labelledby="file" onSubmit={handleImageUpload}>
          <Label htmlFor="file">Foto</Label>
          <Input id="file" name="file" type="file" accept="image/*" />
          <button type="submit">Foto hochladen</button>
          {error && <p>{error.message}</p>}
        </FormContainer>
        <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            defaultValue={defaultData?.name}
            maxLength={15}
            required
          />
          <Label htmlFor="category">Kategorie</Label>
          <Select
            name="category"
            id="category"
            defaultValue={defaultData?.category[0]._id}
            required
          >
            <option value="">hier auswählen</option>
            {categories.map((category) => (
              <option key={category.name} value={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
          <Label htmlFor="purchasingPrice">Kaufpreis</Label>
          <Input
            id="purchasingPrice"
            name="purchasingPrice"
            type="number"
            defaultValue={defaultData?.purchasingPrice}
            step={0.01}
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
