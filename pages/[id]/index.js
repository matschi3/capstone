import StyledHeader from "../../components/StyledHeader/index.js";
import LinkTo from "@/components/LinkTo/index.js";
import { PartsListContainer } from "../../components/PartsList/PartsList.styled.js";
import PartCard from "../../components/PartCard/index.js";
import usePartStore from "../../components/UseStore/UsePartStore.js";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function PartDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/parts/${id}`);
  /*  const { parts, setParts } = usePartStore(); */
  console.log(router.query);
  console.log(data);

  if (isLoading) {
    return <h1>Lädt Teil...</h1>;
  }
  if (!data) {
    return <h1>kein Teil gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

  const detailPart = data;
  return (
    <>
      <StyledHeader title="TEIL" color="var(--color-part)" />
      <LinkTo href={"/"} name={"← zurück"} posbt={"top"} poslr={"left"} />
      <PartsListContainer>
        {!detailPart ? (
          <p>kein Teil gefunden...</p>
        ) : (
          <PartCard part={detailPart} isDetail />
        )}
      </PartsListContainer>
    </>
  );
}
