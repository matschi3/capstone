import { create } from "zustand";
import { initialParts } from "../../lib/parts.js";

const usePartStore = create((set) => ({
  parts: initialParts,
  // add a new part to the 'parts' array in state
  setParts: (newPart) =>
    set((state) => ({
      parts: [...state.parts, newPart],
    })),
  // update a parts value to the 'parts' array in state
  updatePartValue: (uuid, key, newValue) =>
    set((state) => ({
      parts: state.parts.map((part) =>
        part.uuid === uuid ? { ...part, [key]: newValue } : part
      ),
    })),
  // toggle a part value from the 'parts' array in state
  togglePartValue: (uuid, key) =>
    set((state) => ({
      parts: state.parts.map((part) =>
        part.uuid === uuid ? { ...part, [key]: !part[key] } : part
      ),
    })),
  // delete a part from the 'parts' array in state
  deletePart: (uuid) =>
    set((state) => ({
      parts: state.parts.filter((part) => part.uuid !== uuid),
    })),
}));

export default usePartStore;
