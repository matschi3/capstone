import { create } from "zustand";
import { initialParts } from "../../lib/parts.js";

const usePartStore = create((set) => ({
  parts: initialParts,
  setParts: (newPart) =>
    set((state) => ({
      parts: [...state.parts, newPart],
    })),
  updatePartValue: (uuid, key, newValue) =>
    set((state) => ({
      parts: state.parts.map((part) =>
        part.uuid === uuid ? { ...part, [key]: newValue } : part
      ),
    })),
  togglePartValue: (uuid, key) =>
    set((state) => ({
      parts: state.parts.map((part) =>
        part.uuid === uuid ? { ...part, [key]: !part[key] } : part
      ),
    })),
}));

export default usePartStore;
