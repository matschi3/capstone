import StyledHeader from "../components/StyledHeader/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import {
  PartCardCategory,
  PartCardFlexContainer,
} from "../components/PartCard/PartCard.styled.js";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";
import {
  FormContainer,
  Input,
  Label,
} from "../components/PartForm/PartForm.styled.js";

export default function CategoriesPage() {
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

  async function handleAddCategory() {
    console.log("lol");
  }

  return (
    <>
      <StyledHeader title="KATEGORIEN" color="var(--color-category)" />
      <PartsListContainer>
        <FormContainer
          aria-labelledby="add new category"
          onClick={handleAddCategory}
        >
          <Label htmlFor="name">neue Kategorie</Label>
          <Input id="name" name="name" type="text" required />
          <button type="submit">hinzufügen</button>
        </FormContainer>
        {categories.map((category) => (
          <>
            <PartCardFlexContainer direction="row" justify="space-between">
              <PartCardCategory key={category._id}>
                {category.name}
              </PartCardCategory>
              <PartCardFlexContainer direction="row" justify="flex-start">
                {/* place for other category(edit/delete) buttons */}
              </PartCardFlexContainer>
            </PartCardFlexContainer>
          </>
        ))}
      </PartsListContainer>
      <StyledFooter />
    </>
  );
}
