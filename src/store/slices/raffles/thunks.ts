import {
  createCause,
  createDonations,
  createPrize,
  getAssociationsApproveds,
  getCausesCategories,
  getPrizesCategories,
  getRaffles,
} from "@/services/raffles";
import { RootState } from "@/store";
import { Donation, Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Console } from "console";
import { setCausesCategories, setPrizesCategories } from ".";
const PREFIX: string = "raffles";

export const Raffles = createAsyncThunk(
  `${PREFIX}/raffles`,
  async (Profile: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const result = await getRaffles();
      return result.data.results;
    } catch (error) {
      handleError(error);
    }
  }
);
export const GetAssociations = createAsyncThunk(
  `${PREFIX}/associations`,
  async (Profile: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const result = await getAssociationsApproveds();

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);
export const Donations = createAsyncThunk(
  `${PREFIX}/donations`,
  async (donation: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const { raffles } = thunkAPI.getState() as RootState;

      const dataDonation = {
        ...raffles.donationForm1,
        ...raffles.donationFrom2,
      };

      dataDonation.status = dataDonation.status === "on" ? 1 : 0;

      dataDonation.association = Number(dataDonation.association);

      if (dataDonation.association === 0) delete dataDonation.association;

      dataDonation.category = Number(dataDonation.category);
      const result = await createDonations(dataDonation);
      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const createRafflesCause = createAsyncThunk(
  `${PREFIX}/causes`,
  async (cause: any, thunkAPI): Promise<{} | undefined> => {
    try {
      cause.categories = [Number(cause.categories)];
      cause.association = Number(cause.association);

      const result = await createCause(cause);

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const createRafflesPrize = createAsyncThunk(
  `${PREFIX}/prizes`,
  async (prize: any, thunkAPI): Promise<{} | undefined> => {
    try {
      prize.status = prize.status === "on" ? 1 : 0;

      prize.association = Number(prize.association);

      if (prize.association === 0) delete prize.association;

      prize.category = Number(prize.category);

      const result = await createPrize(prize);

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  `${PREFIX}/prizes`,
  async (prize: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const causesResult = await getCausesCategories();
      const prizesResult = await getPrizesCategories();

      thunkAPI.dispatch(setCausesCategories(causesResult.data.results));
      thunkAPI.dispatch(setPrizesCategories(prizesResult.data.results));

      return {};
    } catch (error) {
      handleError(error);
    }
  }
);
