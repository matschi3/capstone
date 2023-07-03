import StyledHeader from "../components/StyledHeader/index.js";
import LinkBack from "../components/LinkBack/index.js";
import { PartsListContainer } from "../components/PartsList/PartsList.styled.js";
import PartCard from "../components/PartCard/index.js";
import usePartStore from "../components/UseStore/UsePartStore.js";
import useItemStore from "../components/UseStore/UseItemStore.js";
import { StyledButton } from "../components/StyledButton/StyledButton.styled.js";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router.js";

export default function CreateItemPage() {
  const { parts, setParts } = usePartStore();
  const inAssemblerParts = parts.filter((part) => part.inAssembler === true);
  const { items, setItems } = useItemStore();
  const router = useRouter();

  function handleCreateItem() {
    if (
      inAssemblerParts.find((part) => part.isAssembled === true) ||
      inAssemblerParts.find((part) => part.isSold === true)
    ) {
      alert("entferne bitte alle bereits verbauten oder verkauften Teile");
    } else {
      const allDate = new Date();
      const day = allDate.getDate();
      const month = allDate.getMonth() + 1;
      const year = allDate.getFullYear();
      const todayDate = day + "." + month + "." + year;

      const newItem = {
        uuid: uuidv4(),
        name: "",
        dateAssembled: todayDate,
        parts: inAssemblerParts.map((part) => part.uuid),
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
      inAssemblerParts.forEach((part) => {
        usePartStore.getState().togglePartValue(part.uuid, "inAssembler");
        usePartStore.getState().togglePartValue(part.uuid, "isAssembled");
        usePartStore
          .getState()
          .updatePartValue(part.uuid, "dateAssembled", todayDate);
      });
      setItems(newItem);
      router.push("/items");
    }
  }

  return (
    <>
      <StyledHeader title="neues ITEM" color="var(--color-inAssembler)" />
      <LinkBack />
      <PartsListContainer borderColor="var(--color-item)">
        {inAssemblerParts.length === 0 ? (
          <p>Keine Teile zum verarbeiten ausgewählt...</p>
        ) : (
          <>
            <StyledButton
              onClick={handleCreateItem}
              name="verarbeiten"
              color="var(--color-item)"
              poslr="right"
            >
              verarbeiten
            </StyledButton>
            {inAssemblerParts.map((part) => (
              <PartCard key={part.uuid} part={part} />
            ))}
          </>
        )}
      </PartsListContainer>
    </>
  );
}
