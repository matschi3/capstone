import { StatMarker } from "./StatusMarker.styled";

export default function StatusMarker({ part }) {
  return (
    <>
      {part.inAssembler === true ? (
        <StatMarker>in Verarbeitung</StatMarker>
      ) : null}
      {part.isAssembled === true ? (
        <StatMarker>verbaut</StatMarker>
      ) : (
        <p>unverbaut</p>
      )}
      {part.isSold === true ? <StatMarker>verkauft</StatMarker> : null}
    </>
  );
}
