import PartForm from "../components/PartForm/index.js";
import StyledHeader from "../components/StyledHeader/index.js";
import LinkTo from "../components/LinkTo/index.js";
import { useRouter } from "next/router";
import useSWR from "swr";
import { toast } from "react-toastify";

export default function CreatePartPage() {
  const { mutate } = useSWR("/api/parts");
  const router = useRouter();

  async function createPart(newPart) {
    const response = await fetch("/api/parts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPart),
    });
    if (response.ok) {
      mutate();
    }
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
