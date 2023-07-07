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
  const partToEdit = parts.find((part) => part.uuid === uuid);

  async function editPart(newPart) {
    // update edited values in state
    usePartStore.getState().updatePartValue(uuid, "name", newPart.name);
    usePartStore.getState().updatePartValue(uuid, "category", newPart.category);
    usePartStore
      .getState()
      .updatePartValue(uuid, "purchasingPrice", newPart.purchasingPrice);
    await usePartStore
      .getState()
      .updatePartValue(uuid, "partOrigin", newPart.partOrigin);
    router.push(`/${uuid}`);
  }

  return (
    <>
      <StyledHeader title="TEIL bearbeiten" color="var(--color-part)" />
      <LinkTo href={`/${uuid}`} name="← zurück" posbt="top" poslr="left" />
      <PartForm
        onSubmit={editPart}
        formName="edit-part"
        defaultData={partToEdit}
      />
    </>
  );
}
