import PartCard from "../PartCard/index.js";
import usePartStore from "../UseStore/UsePartStore.js";
import { PartsListContainer } from "../PartsList/PartsList.styled.js";
import {
  PartCardFlexContainer,
  PartCardImage,
  PartCardText,
} from "../PartCard/PartCard.styled.js";
import useSWR from "swr";
/* import Part from "../../db/models/Part.js"; */
import { useEffect } from "react";

export default function ItemCard({ item }) {
  console.log(item);
  /* const { data, isLoading, error } = useSWR("/api/parts");
  if (isLoading) {
    return <h1>lädt Teile...</h1>;
  }
  if (!data) {
    return <h1>keine Teile gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }
  const parts = data;
  ----------- */
  /*   useEffect(() => {
    // fetch parts by their _id values in item.parts
    const fetchParts = async () => {
      try {
        const fetchedParts = await Part.find({ _id: { $in: item.parts } });
        renderParts(fetchedParts);
        console.log(Part);
        console.log(fetchParts);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };
    fetchParts();
  }, [item.parts]);

  const renderParts = (parts) => {
    return parts.map((part) => <PartCard key={part._id} part={part} isMini />);
  };
  --------------- */
  /* const { data, isLoading, error } = useSWR("/api/parts");
  if (isLoading) {
    return <h1>lädt Teile...</h1>;
  }
  if (!data) {
    return <h1>keine Teile gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }
  const parts = data; */

  /* const { parts, setParts } = usePartStore(); */
  return (
    <PartsListContainer borderColor="var(--color-item)">
      <PartCardFlexContainer direction="row" justify="flex-start">
        <PartCardImage
          src={item.imgUrl}
          alt={item.name}
          width={100}
          height={100}
        />
        <PartCardFlexContainer direction="column" justify="flex-start">
          <PartCardText>{item.dateAssembled}</PartCardText>
          <PartCardText>
            {item.totalPurchasingPrice} {item.currency}
          </PartCardText>
        </PartCardFlexContainer>
      </PartCardFlexContainer>
      {item.parts.map((part) => (
        <PartCard key={part._id} part={part} isMini />
      ))}
      {/* {renderParts} */}
      {/* {parts
        .filter((part) => item.parts.includes(part.uuid))
        .map((part) => (
          <PartCard key={part.uuid} part={part} isMini />
        ))} */}
    </PartsListContainer>
  );
}
