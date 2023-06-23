import { parts } from "@/lib/parts";
import Image from "next/image";

export default function PartCard(params) {
  return (
    <section>
      {parts.map((part) => (
        <article key={part._id}>
          <Image src={part.imgUrl} alt={part.name} width={100} height={100} />
          <p>Einkaufspreis: {part.purchasingPrice}</p>
          <p>Name: {part.name}</p>
          <p>{part.category}</p>
        </article>
      ))}
    </section>
  );
}
