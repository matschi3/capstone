import { parts } from "@/lib/parts";
import PartsList from "@/components/PartsList";
import StyledHeader from "@/components/StyledHeader";
import LinkTo from "@/components/LinkTo";

export default function HomePage() {
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
