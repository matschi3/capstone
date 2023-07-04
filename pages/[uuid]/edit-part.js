import StyledHeader from "../../components/StyledHeader/index.js";
import LinkTo from "../../components/LinkTo/index.js";
import PartForm from "../../components/PartForm/index.js";
import usePartStore from "../../components/UseStore/UsePartStore.js";
import { useRouter } from "next/router";

export default function EditPartPage() {
  const { parts, setParts } = usePartStore();
  // get specific-part data for PartForms defaultData from query
  const router = useRouter();
  const { uuid } = router.query;
  const editPart = parts.find((part) => part.uuid === uuid);
  return (
    <>
      <StyledHeader title="TEIL bearbeiten" color="var(--color-part)" />
      <LinkTo href="/" name="← zurück" posbt="top" poslr="left" />
      <PartForm formName="edit-part" defaultData={editPart} />
    </>
  );
}
