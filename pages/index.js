import PartsList from "../components/PartsList/index.js";
import StyledHeader from "../components/StyledHeader/index.js";
import LinkTo from "../components/LinkTo/index.js";
import usePartStore from "../components/UseStore/UsePartStore.js";
import StyledFooter from "../components/StyledFooter/index.js";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/parts");

  if (isLoading) {
    return <h1>lädt Teile...</h1>;
  }
  if (!data) {
    return <h1>keine Teile gefunden.</h1>;
  }

  const parts = data;
  return (
    <>
      <StyledHeader title="TEILE" color="var(--color-part)" />
      <LinkTo
        href="/create-item"
        name="neues ITEM"
        color="var(--color-item)"
        posbt="top"
        poslr="right"
      />
      <LinkTo
        href="/create-part"
        name="neues TEIL"
        color="var(--color-part)"
        posbt="top"
        poslr="left"
      />
      <PartsList parts={parts} />
      <StyledFooter />
    </>
  );
}
