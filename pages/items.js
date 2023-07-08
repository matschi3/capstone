import StyledHeader from "../components/StyledHeader/index.js";
import ItemCard from "../components/ItemCard/index.js";
import useItemStore from "../components/UseStore/UseItemStore.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";

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
  console.log(items);
  /* const {
    data: itemsData,
    isLoading: itemsIsLoading,
    error: itemsError,
  } = useSWR("/api/items");
  const {
    dtaa: partsData,
    isLoading: partsIsLoading,
    error: partsError,
  } = useSWR("/api/parts");

  if (itemsIsLoading) {
    return <h1>lädt Items...</h1>;
  }
  if (!itemsData) {
    return <h1>keine Items gefunden.</h1>;
  }
  if (itemsError) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  if (partsIsLoading) {
    return <h1>lädt Teile...</h1>;
  }
  if (!partsData) {
    return <h1>keine Teile gefunden.</h1>;
  }
  if (partsError) {
    return <h1>error! fehlerhafte Daten.</h1>;
  } */

  /*  const { items, setItems } = useItemStore(); */
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
