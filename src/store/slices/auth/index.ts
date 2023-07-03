import {RootState} from "@/store";
import {createSlice} from "@reduxjs/toolkit";
import {REGISTER_EXTRA_REDUCERS} from "./extra-reducers";
import {authSliceModel} from "@/types/Store/auth";

const initialState: authSliceModel = {
  authenticated: false,
  loading: false, 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    REGISTER_EXTRA_REDUCERS(builder);
  },
});

export const {} = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
export * from "./thunks";
