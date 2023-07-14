
import { createDonations, getRaffles } from "@/services/raffles";
import { RootState } from "@/store";
import { Donation, Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { Console } from "console";
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
export const Donations = createAsyncThunk(
  `${PREFIX}/donations`,
  async (
    donation: any,
    thunkAPI
  ): Promise<{} | undefined> => {

    try {

      const {raffles} = thunkAPI.getState() as RootState

      console.log(raffles) 

      
      const dataDonation = {...raffles.donationForm1,...raffles.donationFrom2}
       const result =  await createDonations(dataDonation); 
      console.log(result)
      return result.data 

    } catch (error) {
      handleError(error)
    }
  }
);




