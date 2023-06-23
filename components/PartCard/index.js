import Image from "next/image";

export default function PartCard({ part }) {
  return (
    <article>
      <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
      <p>Einkaufspreis: {part.purchasingPrice}</p>
      <p>Name: {part.name}</p>
      <p>{part.category}</p>
    </article>
  );
}
