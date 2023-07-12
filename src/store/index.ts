import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/auth";
import raffles from "./slices/raffles";
export const store = configureStore({
  reducer: {
    auth,
    raffles
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
