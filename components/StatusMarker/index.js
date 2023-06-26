import { StatMarker } from "./StatusMarker.styled";

export default function StatusMarker({ part }) {
  return (
    <>
      {part.inAssembler === true ? <p>in Verarbeitung</p> : null}
      {part.isAssembled === true ? <p>verbaut</p> : <p>unverbaut</p>}
      {part.isSold === true ? <p>verkauft</p> : null}
    </>
  );
}
