import StyledHeader from "../../components/StyledHeader/index.js";
import LinkBack from "../../components/LinkBack/index.js";
import { PartsListContainer } from "../../components/PartsList/PartsList.styled.js";
import PartCard from "../../components/PartCard/index.js";
import usePartStore from "../../components/UseStore/UsePartStore.js";
import { useRouter } from "next/router";

export default function PartDetailPage() {
  const { parts, setParts } = usePartStore();

  const router = useRouter();
  const { uuid } = router.query;
  const detailPart = parts.find((part) => part.uuid === uuid);

  return (
    <>
      <StyledHeader title="TEIL" color="var(--color-part)" />
      <LinkBack />
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
