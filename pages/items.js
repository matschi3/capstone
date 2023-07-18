import StyledHeader from "../components/StyledHeader/index.js";
import ItemCard from "../components/ItemCard/index.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";
import { useState } from "react";
import StyledFilter from "../components/StyledFilter/index.js";
import { FilterContainer } from "../components/StyledFilter/StyledFilter.styled.js";

export default function ItemsPage() {
  const [sorting, setSorting] = useState("dateAssembled(DESC)");
  const [statusFilter, setStatusFilter] = useState("!isSold");

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

  const filteredItems = items.filter((item) => {
    if (statusFilter === "!isSold") {
      return !item.isSold;
    } else if (statusFilter === "isSold") {
      return item.isSold;
    } else if (statusFilter === "all") {
      return item;
    } else return 0;
  });

  const sortedItems = filteredItems.slice().sort((a, b) => {
    if (sorting === "dateAssembled(DESC)") {
      return new Date(b.dateAssembled) - new Date(a.dateAssembled);
    } else if (sorting === "dateAssembled(ASC)") {
      return new Date(a.dateAssembled) - new Date(b.dateAssembled);
      // in this case, there are items with NO dateSold set -> sort them to the end
    } else if (sorting === "dateSold(DESC)") {
      if (a.dateSold && b.dateSold) {
        return new Date(b.dateSold) - new Date(a.dateSold);
      } else if (a.dateSold && !b.dateSold) {
        return -1;
      } else if (!a.dateSold && b.dateSold) {
        return 1;
      } else {
        return new Date(b.dateAssembled) - new Date(a.dateAssembled);
      }
      // in this case, there are items with NO dateSold set, too -> sort them to the end
    } else if (sorting === "dateSold(ASC)") {
      if (a.dateSold && b.dateSold) {
        return new Date(a.dateSold) - new Date(b.dateSold);
      } else if (a.dateSold && !b.dateSold) {
        return -1;
      } else if (!a.dateSold && b.dateSold) {
        return 1;
      } else {
        return new Date(a.dateAssembled) - new Date(b.dateAssembled);
      }
    }
    return 0;
  });

  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      <FilterContainer>
        {/* render a filterButton for each object in 'options' with given 'value' and 'label' */}
        <StyledFilter
          options={[
            {
              value: "dateAssembled(DESC)",
              label: "verbaut (neueste)",
            },
            {
              value: "dateAssembled(ASC)",
              label: "verbaut (älteste)",
            },
            {
              value: "dateSold(DESC)",
              label: "verkauft (neueste)",
            },
            {
              value: "dateSold(ASC)",
              label: "verkauft (älteste)",
            },
          ]}
          value={sorting}
          onChange={(newSorting) => {
            setSorting(newSorting);
          }}
        />
        <StyledFilter
          options={[
            {
              value: "!isSold",
              label: "unverkauft",
            },
            {
              value: "isSold",
              label: "verkauft",
            },
            {
              value: "all",
              label: "alle",
            },
          ]}
          value={statusFilter}
          onChange={(newSorting) => {
            setStatusFilter(newSorting);
          }}
        />
      </FilterContainer>
      {sortedItems.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
      <StyledFooter />
    </>
  );
}
