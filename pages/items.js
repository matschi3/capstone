import StyledHeader from "../components/StyledHeader/index.js";
import LinkTo from "../components/LinkTo/index.js";
import ItemCard from "../components/ItemCard/index.js";
import useItemStore from "../components/UseStore/UseItemStore.js";
import StyledFooter from "../components/StyledFooter/index.js";

export default function ItemsPage() {
  const { items, setItems } = useItemStore();
  return (
    <>
      <StyledHeader title="ITEMS" color="var(--color-item)" />
      <LinkTo
        href="/create-item"
        name="← zurück"
        color="var(--color-inAssembler)"
        poslr="left"
        posbt="top"
      />
      {items.map((item) => (
        <ItemCard key={item.uuid} item={item} />
      ))}
      <StyledFooter />
    </>
  );
}
