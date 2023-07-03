import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
import ItemCard from "../components/ItemCard/index.js";
import useItemStore from "../components/UseStore/UseItemStore.js";

export default function ItemsPage() {
  const { items, setItems } = useItemStore();
  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      <LinkBack />
      {items.map((item) => (
        <ItemCard key={item.uuid} item={item} />
      ))}
    </>
  );
}
