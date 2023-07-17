import StyledHeader from "../components/StyledHeader/index.js";
import ItemCard from "../components/ItemCard/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import { useState } from "react";
import StyledFilter from "../components/StyledFilter/index.js";
import { FilterContainer } from "../components/StyledFilter/StyledFilter.styled.js";

export default function ItemsPage() {
  const [sorting, setSorting] = useState("verbaut(neueste)");
  const [activeSorting, setActiveSorting] = useState("verbaut(neueste)");

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
      <FilterContainer>
        {/* render a filterButton for each object in 'sets' with given 'function', 'value to set' and 'name' */}
        {/* funct2 + value2 for activeFilter-highlighting */}
        <StyledFilter
          filters={[
            {
              functionToSet: setSorting,
              valueToSet: "verbaut(neueste)",
              buttonName: "verbaut (neueste)",
              activeFunctionToSet: setActiveSorting,
              activeValueToSet: "verbaut(neueste)",
            },
            {
              functionToSet: setSorting,
              valueToSet: "verbaut(älteste)",
              buttonName: "verbaut (älteste)",
              activeFunctionToSet: setActiveSorting,
              activeValueToSet: "verbaut(älteste)",
            },
            {
              functionToSet: setSorting,
              valueToSet: "verkauft(neueste)",
              buttonName: "verkauft (neueste)",
              activeFunctionToSet: setActiveSorting,
              activeValueToSet: "verkauft(neueste)",
            },
            {
              functionToSet: setSorting,
              valueToSet: "verkauft(älteste)",
              buttonName: "verkauft (älteste)",
              activeFunctionToSet: setActiveSorting,
              activeValueToSet: "verkauft(älteste)",
            },
          ]}
          activeFilter={activeSorting}
        />
      </FilterContainer>
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
      <StyledFooter />
    </>
  );
}
