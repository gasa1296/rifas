import {RootState} from "@/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
const PREFIX: string = "auth";
export const getAuth = createAsyncThunk(
  `${PREFIX}/auth`,
  async (
    options: undefined,
    thunkAPI
  ): Promise<{test: boolean} | undefined> => {
    const {} = (thunkAPI.getState() as RootState).auth;

    try {
      return {test: true};
    } catch (error) {
      // thunkAPI.dispatch("123");
    }
  }
);
