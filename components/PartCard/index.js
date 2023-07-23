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
import { useState } from "react";

export default function PartCard({ part, isDetail, isMini }) {
  const router = useRouter();
  const { id } = router.query;
  // state for image error handling
  const [imageError, setImageError] = useState(false);

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
    !id ? mutate(`/api/parts`) : mutate(`/api/parts/${id}`);
  }

  async function deletePart() {
    await fetch(`/api/parts/${id}`, {
      method: "DELETE",
    });
    toast("✅ Teil erfolgreich gelöscht 🗑️");
    router.push("/");
  }

  const noImageDefaultImgUrl =
    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg";
  return (
    <>
      {isMini ? (
        <PartCardFlexContainer
          direction="row"
          justify="flex-start"
          border="var(--color-black)"
          isCard
          boxShadow
          cardColor="var(--color-part)"
        >
          <PartCardImage
            src={part.imgUrl}
            alt={
              part.category[0]?.name
                ? part.category[0]?.name
                : "part of an etagery"
            }
            width={100}
            height={100}
            onLoad={() => setImageError(false)}
            onError={() => setImageError(true)}
            style={imageError ? { display: "none" } : {}}
          />
          {imageError && (
            <PartCardImage
              src={noImageDefaultImgUrl}
              alt={
                part.category[0]?.name
                  ? part.category[0]?.name
                  : "part of an etagery"
              }
              width={100}
              height={100}
            />
          )}
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
        <PartCardFlexContainer
          direction="column"
          border="var(--color-black)"
          minWidth="300px"
          maxWidth="380px"
          isCard
          boxShadow
          cardColor="var(--color-part)"
        >
          <PartCardFlexContainer direction="row" justify="space-between">
            <Link href={!isDetail ? `/${part._id}` : `/`}>
              <PartCardImage
                src={part.imgUrl}
                alt={
                  part.category[0]?.name
                    ? part.category[0]?.name
                    : "part of an etagery"
                }
                width={100}
                height={100}
                onLoad={() => setImageError(false)}
                onError={() => setImageError(true)}
                style={imageError ? { display: "none" } : {}}
              />
              {imageError && (
                <PartCardImage
                  src={noImageDefaultImgUrl}
                  alt={
                    part.category[0]?.name
                      ? part.category[0]?.name
                      : "part of an etagery"
                  }
                  width={100}
                  height={100}
                />
              )}
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
                  <PartCardText>
                    EK Tag:{" "}
                    {new Intl.DateTimeFormat("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "numeric",
                    }).format(new Date(part.dateBuy))}
                  </PartCardText>
                  <PartCardText>
                    VK Tag:{" "}
                    {part.dateSold !== ""
                      ? new Intl.DateTimeFormat("de-DE", {
                          year: "numeric",
                          month: "2-digit",
                          day: "numeric",
                        }).format(new Date(part.dateSold))
                      : ""}
                  </PartCardText>
                  <PartCardText>uuid: {part.uuid}</PartCardText>
                </>
              )}
            </PartCardFlexContainer>
            <PartCardFlexContainer direction="column" justify="flex-start">
              <StyledButton
                onClick={toggleInAssembler}
                borderColor="var(--color-highlight)"
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
