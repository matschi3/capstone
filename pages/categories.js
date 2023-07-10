import StyledHeader from "../components/StyledHeader/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import { PartCardCategory } from "../components/PartCard/PartCard.styled.js";

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

  return (
    <>
      <StyledHeader title="KATEGORIEN" color="var(--color-category)" />
      <StyledFooter />
    </>
  );
}
