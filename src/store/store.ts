import { configureStore } from "@reduxjs/toolkit";

// slices
import itemsReducer from "./itemsSlice";
import isAdminReducer from "./isAdminSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    isAdmin: isAdminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
