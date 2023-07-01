import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";
import PartCard from "../components/PartCard/index.js";
import usePartStore from "../components/PartStore/UsePartStore.js";
import LinkTo from "../components/LinkTo/index.js";

export default function CreateItemPage() {
  const { parts, setParts } = usePartStore();
  const inAssemblerParts = parts.filter((part) => part.inAssembler === true);

  return (
    <>
      <StyledHeader title="neues ITEM" color="var(--color-inAssembler)" />
      <LinkBack />
      <PartsListContainer borderColor="var(--color-item)">
        {inAssemblerParts.length === 0 ? (
          <p>Keine Teile zum verarbeiten ausgewählt...</p>
        ) : (
          <>
            <LinkTo
              href="/items"
              name="verarbeiten"
              color="var(--color-inAssembler)"
              poslr="right"
            />
            {inAssemblerParts.map((part) => (
              <PartCard key={part.uuid} part={part} />
            ))}
          </>
        )}
      </PartsListContainer>
    </>
  );
}
