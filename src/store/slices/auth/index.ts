import {RootState} from "@/store";
import {createSlice} from "@reduxjs/toolkit";
import {REGISTER_EXTRA_REDUCERS} from "./extra-reducers";
import {authSliceModel} from "@/types/Store/auth";

const initialState: authSliceModel = {
  authenticated: false,
  loading: false, 
  profile: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
 
    setLogout: (state) =>{ 
      state.authenticated = false 
      state.profile = {}
       localStorage.removeItem("sessionToken")
       localStorage.removeItem("sessionTokenRefresh")
    }

  },
  extraReducers: (builder) => {
    REGISTER_EXTRA_REDUCERS(builder);
  },
});

export const {setLogout} = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
export * from "./thunks";
