import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";

export default function CreateItemPage() {
  return (
    <>
      <StyledHeader title="neues ITEM" color="var(--color-inAssembler)" />
      <LinkBack />
      <PartsListContainer borderColor="var(--color-inAssembler)"></PartsListContainer>
    </>
  );
}
