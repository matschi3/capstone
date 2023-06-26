export default function StatusMarker({ part }) {
  return <>{part.inAssembler === true ? <p>in Verarbeitung</p> : null}</>;
}
