import { create } from "zustand";
import { initialItems } from "../../lib/items.js";

const useItemStore = create((set) => ({
  items: initialItems,
  setItems: (newItem) =>
    set((state) => ({
      items: [...state.items, newItem],
    })),
  updateItemValue: (uuid, key, newValue) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.uuid === uuid ? { ...item, [key]: newValue } : item
      ),
    })),
  toggleItemValue: (uuid, key) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.uuid === uuid ? { ...item, [key]: !item[key] } : item
      ),
    })),
}));

export default useItemStore;
