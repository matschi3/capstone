import StyledHeader from "../components/StyledHeader/index.js";
import ItemCard from "../components/ItemCard/index.js";
import useItemStore from "../components/UseStore/UseItemStore.js";
import StyledFooter from "../components/StyledFooter/index.js";

export default function ItemsPage() {
  const { items, setItems } = useItemStore();
  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      {items.map((item) => (
        <ItemCard key={item.uuid} item={item} />
      ))}
      <StyledFooter />
    </>
  );
}
