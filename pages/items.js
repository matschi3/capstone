import StyledHeader from "../components/StyledHeader/index.js";
import ItemCard from "../components/ItemCard/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import { useState } from "react";

export default function ItemsPage() {
  const { data: items, isLoading, error } = useSWR("/api/items");
  if (isLoading) {
    return <h1>lädt Items...</h1>;
  }
  if (!items) {
    return <h1>keine Items gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
      <StyledFooter />
    </>
  );
}
