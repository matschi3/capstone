import { create } from "zustand";
import { initialParts } from "@/lib/parts";

const usePartStore = create((set) => ({
  parts: initialParts,
  setParts: (newPart) =>
    set((state) => ({
      parts: [...state.parts, newPart],
    })),
}));

export default usePartStore;
