import PartsList from "@/components/PartsList";
import StyledHeader from "@/components/StyledHeader";
import LinkTo from "@/components/LinkTo";
import usePartStore from "@/components/PartStore/UsePartStore";

export default function HomePage() {
  const { parts, setParts } = usePartStore();
  return (
    <>
      <StyledHeader title={"TEILE"} color={"var(--color-part)"} />
      <LinkTo
        href={"/create-part"}
        name={"neues TEIL"}
        color={"var(--color-part)"}
      />
      <PartsList parts={parts} />;
    </>
  );
}
