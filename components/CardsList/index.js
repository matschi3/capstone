import PartCard from "../PartCard";

export default function PartsList(params) {
  return (
    <section>
      {parts.map((part) => (
        <PartCard part={part} />
      ))}
    </section>
  );
}
