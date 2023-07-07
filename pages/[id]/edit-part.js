import StyledHeader from "../../components/StyledHeader/index.js";
import LinkTo from "../../components/LinkTo/index.js";
import PartForm from "../../components/PartForm/index.js";
import usePartStore from "../../components/UseStore/UsePartStore.js";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditPartPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error, mutate } = useSWR(`/api/parts/${id}`);
  if (isLoading) {
    return <h1>Lädt Teil...</h1>;
  }
  if (!data) {
    return <h1>kein Teil zum bearbeiten gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }
  const partToEdit = data;

  async function editPart(newPart) {
    console.log(newPart);
    const response = await fetch(`/api/parts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPart),
    });
    if (response.ok) {
      mutate();
    }
    router.push(`/${id}`);
    // update edited values in state
    /* usePartStore.getState().updatePartValue(uuid, "name", newPart.name);
    usePartStore.getState().updatePartValue(uuid, "category", newPart.category);
    usePartStore
      .getState()
      .updatePartValue(uuid, "purchasingPrice", newPart.purchasingPrice);
    await usePartStore
      .getState()
      .updatePartValue(uuid, "partOrigin", newPart.partOrigin);
    router.push(`/${uuid}`); */
  }

  return (
    <>
      <StyledHeader title="TEIL bearbeiten" color="var(--color-part)" />
      <LinkTo href={`/${id}`} name="← zurück" posbt="top" poslr="left" />
      <PartForm
        onSubmit={editPart}
        formName="edit-part"
        defaultData={partToEdit}
      />
    </>
  );
}
