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
  deletePart: (uuid) =>
    set((state) => ({
      parts: state.parts.filter((part) => part.uuid !== uuid),
    })),
}));

export default usePartStore;
