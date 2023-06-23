import PartCard from "../PartCard";

export default function PartsList({ parts }) {
  return (
    <section>
      {parts.map((part) => {
        <PartCard key={part.id} part={part} />;
      })}
    </section>
  );
}
