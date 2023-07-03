import { registerUser } from "@/services/auth";
import {RootState} from "@/store";
import { Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import {createAsyncThunk} from "@reduxjs/toolkit";
const PREFIX: string = "auth";
export const Register = createAsyncThunk(
  `${PREFIX}/register`,
  async (
    Profile: Profile,
    thunkAPI
  ): Promise<{test: boolean} | undefined> => {
    const {} = (thunkAPI.getState() as RootState).auth;

    try {

      const {data} = await registerUser(Profile)
      return data
    } catch (error) {
      handleError(error)
    }
  }
);
