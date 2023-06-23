import PartCard from "@/components/PartCard";
import { parts } from "@/lib/parts";
import PartsList from "@/components/PartsList";

export default function HomePage() {
  return <PartsList parts={parts} />;
}
