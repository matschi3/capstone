import StyledHeader from "../../components/StyledHeader/index.js";
import LinkTo from "@/components/LinkTo/index.js";
import { PartsListContainer } from "../../components/PartsList/PartsList.styled.js";
import PartCard from "../../components/PartCard/index.js";
import { useRouter } from "next/router";
import useSWR from "swr";
import { mutate } from "swr";

export default function PartDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: detailPart, isLoading, error } = useSWR(`/api/parts/${id}`);
  mutate(`/api/parts/${id}`);
  if (isLoading) {
    return <h1>Lädt Teil...</h1>;
  }
  if (!detailPart) {
    return <h1>kein Teil gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }

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
