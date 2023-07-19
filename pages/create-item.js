import StyledHeader from "../components/StyledHeader/index.js";
import LinkTo from "../components/LinkTo/index.js";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";
import PartCard from "../components/PartCard/index.js";
import { StyledButton } from "../components/StyledButton/StyledButton.styled.js";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import { toast } from "react-toastify";

export default function CreateItemPage() {
  const router = useRouter();
  const { data, isLoading, mutate } = useSWR("/api/parts");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const inAssemblerParts = data.filter((part) => part.inAssembler === true);

  async function handleCreateItem() {
    // check for already assembled or sold parts in Assembler
    if (
      inAssemblerParts.find((part) => part.isAssembled === true) ||
      inAssemblerParts.find((part) => part.isSold === true)
    ) {
      alert("entferne bitte alle bereits verbauten oder verkauften Teile");
    } else {
      // create new item from inAssemblerParts
      const newItem = {
        uuid: uuidv4(),
        name: "",
        dateAssembled: new Date(),
        parts: inAssemblerParts.map((part) => part._id),
        totalPurchasingPrice: inAssemblerParts.reduce(
          (sum, part) => sum + part.purchasingPrice,
          0
        ),
        targetPrice: "",
        soldForPrice: "",
        currency: "EUR",
        dateSold: "",
        imgUrl:
          "https://res.cloudinary.com/dn4pswuzt/image/upload/v1688228715/etagere_sqk9al.jpg",
        isSold: false,
      };

      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (response.ok) {
        inAssemblerParts.forEach((part) => {
          const assembledPart = {
            ...part,
            inAssembler: false,
            isAssembled: true,
            dateAssembled: newItem.dateAssembled,
          };
          const response = fetch(`/api/parts/${part._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(assembledPart),
          });
        });
        mutate();
        router.push("/items");
      }
    }
  }

  return (
    <>
      <StyledHeader title="neues ITEM" color="var(--color-inAssembler)" />
      <LinkTo href={"/"} name={"← zurück"} posbt={"top"} poslr={"left"} />
      <PartsListContainer borderColor="var(--color-item)">
        {inAssemblerParts.length === 0 ? (
          <p>Keine Teile zum verarbeiten ausgewählt...</p>
        ) : (
          <>
            <StyledButton
              onClick={handleCreateItem}
              name="verarbeiten"
              color="var(--color-item)"
              posbt="top"
              poslr="right"
              fontSize="1rem"
            >
              verarbeiten
            </StyledButton>
            {inAssemblerParts.map((part) => (
              <PartCard key={part._id} part={part} />
            ))}
          </>
        )}
      </PartsListContainer>
    </>
  );
}
