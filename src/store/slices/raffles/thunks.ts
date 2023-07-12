
import { getRaffles } from "@/services/raffles";
import { Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import {createAsyncThunk} from "@reduxjs/toolkit";
const PREFIX: string = "raffles";


export const Raffles = createAsyncThunk(
  `${PREFIX}/raffles`,
  async (
    Profile: any,
    thunkAPI
  ): Promise<{} | undefined> => {

    try {
      const result =  await getRaffles(); 
      return result.data.results
    } catch (error) {
      handleError(error)
    }
  }
);


