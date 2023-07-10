import StyledHeader from "../components/StyledHeader/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";

export default function CategoriesPage() {
  return (
    <>
      <StyledHeader title="KATEGORIEN" color="var(--color-category)" />
      <StyledFooter />
    </>
  );
}
