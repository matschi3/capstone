import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
import { initialItems } from "../lib/items.js";
import ItemCard from "../components/ItemCard/index.js";

export default function ItemsPage() {
  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      <LinkBack />
      {initialItems.map((item) => (
        <ItemCard key={item.uuid} item={item} />
      ))}
    </>
  );
}
