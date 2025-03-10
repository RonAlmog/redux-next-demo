import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<User>) => {
      state.value.name = action.payload.name;
    },
    setEmail: (state, action: PayloadAction<User>) => {
      state.value.email = action.payload.email;
    },
    setPhone: (state, action: PayloadAction<User>) => {
      state.value.phone = action.payload.phone;
    },
    setAddress: (state, action: PayloadAction<User>) => {
      state.value.address = action.payload.address;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setEmail, setAddress, setPhone } = userSlice.actions;

export default userSlice.reducer;
