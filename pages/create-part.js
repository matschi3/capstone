import PartForm from "@/components/PartForm";
import usePartStore from "@/components/PartStore/UsePartStore";
import StyledHeader from "@/components/StyledHeader";
import LinkBack from "@/components/LinkBack";

export default function CreatePartPage() {
  const { parts, setParts } = usePartStore();

  function createPart(newPart) {
    setParts(newPart);
  }

  return (
    <>
      <StyledHeader title={"neues TEIL"} color={"var(--color-part)"} />
      <LinkBack />
      <PartForm onSubmit={createPart} formName={"create-part"} />
    </>
  );
}
