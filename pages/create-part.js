import PartForm from "../components/PartForm/index.js";
import usePartStore from "../components/UseStore/UsePartStore.js";
import StyledHeader from "../components/StyledHeader/index.js";
import LinkTo from "../components/LinkTo/index.js";
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
      <LinkTo href={"/"} name={"← zurück"} posbt={"top"} poslr={"left"} />
      <PartForm onSubmit={createPart} formName={"create-part"} />
    </>
  );
}
