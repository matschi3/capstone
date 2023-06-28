import { StatMarker } from "./StatusMarker.styled.js";

export default function StatusMarker({ part }) {
  return (
    <>
      {part.inAssembler === true ? (
        <StatMarker style={{ backgroundColor: "var(--color-inAssembler)" }}>
          in Verarbeitung
        </StatMarker>
      ) : null}
      {part.isAssembled === true ? (
        <StatMarker style={{ backgroundColor: "var(--color-isAssembled)" }}>
          verbaut
        </StatMarker>
      ) : (
        <StatMarker style={{ backgroundColor: "var(--color-isNotAssembled)" }}>
          unverbaut
        </StatMarker>
      )}
      {part.isSold === true ? (
        <StatMarker style={{ backgroundColor: "var(--color-isSold)" }}>
          verkauft
        </StatMarker>
      ) : null}
    </>
  );
}
