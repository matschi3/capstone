import Link from "next/link.js";
import {
  PartCardFlexContainer,
  PartCardCategory,
  PartCardImage,
  PartCardText,
} from "./PartCard.styled.js";
import StatusMarker from "../StatusMarker/index.js";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";
import LinkTo from "../LinkTo/index.js";
import { useRouter } from "next/router.js";
import { mutate } from "swr";
import { toast } from "react-toastify";

// isDetail is for parts-detail-page, isMini is for mini-part-card on corresponding item-card
export default function PartCard({ part, isDetail, isMini }) {
  const router = useRouter();
  const { id } = router.query;

  // toggle part.inAssembler for assembling parts into an item
  async function toggleInAssembler() {
    const toggledPart = { ...part, inAssembler: !part.inAssembler };
    // fetch url ternary: if toggleButton is clicked on the partsList page, there is no id from router.query; instead use given 'part' to get its '_id' for toggeling
    const response = await fetch(
      !id ? `/api/parts/${part._id}` : `/api/parts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toggledPart),
      }
    );
    // mutate partsList or partDetailPage depending on where toggleButton is clicked
    !id ? mutate(`/api/parts`) : mutate(`/api/parts/${id}`);
  }

  async function deletePart() {
    await fetch(`/api/parts/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  const noImageDefaultImgUrl =
    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg";
  return (
    <>
      {isMini ? (
        <PartCardFlexContainer
          direction="row"
          border="blue"
          justify="flex-start"
        >
          <PartCardFlexContainer width="15%"></PartCardFlexContainer>
          <PartCardImage
            src={part.imgUrl ? part.imgUrl : noImageDefaultImgUrl}
            alt={
              part.category[0]?.name
                ? part.category[0]?.name
                : "part of an etagery"
            }
            width={100}
            height={100}
          />
          <PartCardFlexContainer direction="column" justify="flex-start">
            <PartCardText>
              EK: {part.purchasingPrice} {part.currency}
            </PartCardText>
            <PartCardFlexContainer direction="row" justify="flex-start">
              <PartCardCategory>{part.category[0]?.name}</PartCardCategory>
            </PartCardFlexContainer>
          </PartCardFlexContainer>
        </PartCardFlexContainer>
      ) : (
        <PartCardFlexContainer direction="column" border="blue">
          <PartCardFlexContainer direction="row" justify="space-between">
            <Link href={!isDetail ? `/${part._id}` : `/`}>
              <PartCardImage
                src={part.imgUrl ? part.imgUrl : noImageDefaultImgUrl}
                alt={
                  part.category[0]?.name
                    ? part.category[0]?.name
                    : "part of an etagery"
                }
                width={100}
                height={100}
              />
            </Link>
            <PartCardFlexContainer direction="column" justify="flex-start">
              <PartCardText>Name: {part.name}</PartCardText>
              <PartCardText>
                EK Preis: {part.purchasingPrice} {part.currency}
              </PartCardText>

              {!isDetail ? (
                ""
              ) : (
                <>
                  <PartCardText>EK Ort: {part.partOrigin}</PartCardText>
                  <PartCardText>EK Tag: {part.dateBuy}</PartCardText>
                  <PartCardText>VK Tag: {part.dateSold}</PartCardText>
                  <PartCardText>uuid: {part.uuid}</PartCardText>
                </>
              )}
            </PartCardFlexContainer>
            <PartCardFlexContainer direction="column" justify="flex-start">
              <StyledButton
                onClick={toggleInAssembler}
                borderColor="var(--color-inAssembler)"
              >
                verarbeiten
              </StyledButton>
              {!isDetail ? (
                ""
              ) : (
                <>
                  <LinkTo
                    href={`${part._id}/edit-part`}
                    name="bearbeiten"
                    fontSize="13.333px"
                  />
                  <StyledButton
                    onClick={deletePart}
                    borderColor="var(--color-red)"
                  >
                    löschen
                  </StyledButton>
                </>
              )}
            </PartCardFlexContainer>
          </PartCardFlexContainer>
          <PartCardFlexContainer direction="row" justify="flex-start">
            <PartCardCategory>{part.category[0]?.name}</PartCardCategory>
            <StatusMarker part={part} />
          </PartCardFlexContainer>
        </PartCardFlexContainer>
      )}
    </>
  );
}
