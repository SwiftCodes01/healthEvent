import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    update: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
