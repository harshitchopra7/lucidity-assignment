import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  isAdmin: boolean;
}

const initialState: AdminState = {
  isAdmin: true,
};

const isAdminSlice = createSlice({
  name: "isAdmin",
  initialState,
  reducers: {
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setIsAdmin } = isAdminSlice.actions;
export default isAdminSlice.reducer;
