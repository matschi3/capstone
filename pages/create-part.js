import PartForm from "@/components/PartForm";
import usePartStore from "@/components/PartStore/UsePartStore";
import StyledHeader from "@/components/StyledHeader";
import LinkBack from "@/components/LinkBack";
import { useRouter } from "next/router";

export default function CreatePartPage() {
  const { parts, setParts } = usePartStore();
  const router = useRouter();

  function createPart(newPart) {
    setParts(newPart);
    router.push("/");
  }

  return (
    <>
      <StyledHeader title={"neues TEIL"} color={"var(--color-part)"} />
      <LinkBack />
      <PartForm onSubmit={createPart} formName={"create-part"} />
    </>
  );
}
