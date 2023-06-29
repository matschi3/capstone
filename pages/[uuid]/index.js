import StyledHeader from "../../components/StyledHeader/index.js";
import LinkBack from "../../components/LinkBack/index.js";
import { PartsListContainer } from "../../components/PartsList/PartsList.styled.js";
import PartCard from "../../components/PartCard/index.js";

export default function PartDetailPage() {
  return (
    <>
      <StyledHeader title={"TEIL"} color={"var(--color-part)"} />
      <LinkBack />
    </>
  );
}
