import StyledHeader from "../components/StyledHeader/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";
import CategoryCard from "../components/CategoryCard/index.js";
import CategoryForm from "../components/CategoryForm/index.js";

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

  async function handleAddCategory(newCategory) {
    const response = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    if (response.ok) {
      alert("Kategorie hinzugefügt");
    }
  }

  return (
    <>
      <StyledHeader title="KATEGORIEN" color="var(--color-category)" />
      <PartsListContainer>
        <CategoryForm onSubmit={handleAddCategory} formName="add-category" />
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </PartsListContainer>
      <StyledFooter />
    </>
  );
}
