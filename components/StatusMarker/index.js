import { StatMarker } from "./StatusMarker.styled.js";

export default function StatusMarker({ part }) {
  return (
    <>
      {part.inAssembler === true ? (
        <StatMarker
          key={"inAssembler"}
          style={{ backgroundColor: "var(--color-inAssembler)" }}
        >
          in Verarbeitung
        </StatMarker>
      ) : null}
      {part.isAssembled === true ? (
        <StatMarker
          key={"isAssembled"}
          style={{ backgroundColor: "var(--color-isAssembled)" }}
        >
          verbaut
        </StatMarker>
      ) : (
        <StatMarker
          key={"NotinAssembler"}
          style={{ backgroundColor: "var(--color-isNotAssembled)" }}
        >
          unverbaut
        </StatMarker>
      )}
      {part.isSold === true ? (
        <StatMarker
          key={"isSold"}
          style={{ backgroundColor: "var(--color-isSold)" }}
        >
          verkauft
        </StatMarker>
      ) : null}
    </>
  );
}
