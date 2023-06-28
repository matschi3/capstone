import PartForm from "../components/PartForm/index.js";
import usePartStore from "../components/PartStore/UsePartStore.js";
import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
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
