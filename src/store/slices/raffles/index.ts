import {RootState} from "@/store";
import {createSlice} from "@reduxjs/toolkit";
import {RAFFLES_EXTRA_REDUCERS} from "./extra-reducers";
import {authSliceModel} from "@/types/Store/auth";
import { RaffleInitialState } from "@/types/Store/raffles";

const initialState: RaffleInitialState = {
  raffles: [],
  raffle: null,
  loading: true,
};

export const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {

    setRaffle: (state, action) =>{
      console.log("first", action.payload)
        state.raffle = state.raffles.find(raffle => raffle.id.toString() === action.payload.toString()) || null
    }


  },
  extraReducers: (builder) => {
    RAFFLES_EXTRA_REDUCERS(builder)  


  },
});

export const {setRaffle} = rafflesSlice.actions;
export const selectRaffleState = (state: RootState) => state.raffles;
export default rafflesSlice.reducer;
export * from "./thunks";
