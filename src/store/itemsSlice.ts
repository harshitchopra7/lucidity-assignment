import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { Item } from "../types/types";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    updateItem(state, action: PayloadAction<Item>) {
      const updatedItem = action.payload;
      state.items = state.items.map((item) =>
        item.name === updatedItem.name ? updatedItem : item
      );
    },
    deleteItem(state, action: PayloadAction<string>) {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },
    toggleItem(state, action: PayloadAction<string>) {
      const itemName = action.payload;
      state.items = state.items.map((item) =>
        item.name === itemName
          ? { ...item, isDisabled: !item.isDisabled }
          : item
      );
    },
  },
});

export const { setItems, updateItem, deleteItem, toggleItem } =
  itemsSlice.actions;
export default itemsSlice.reducer;
