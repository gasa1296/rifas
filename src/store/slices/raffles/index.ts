import {RootState} from "@/store";
import {createSlice} from "@reduxjs/toolkit";
import {RAFFLES_EXTRA_REDUCERS} from "./extra-reducers";
import {authSliceModel} from "@/types/Store/auth";
import { RaffleInitialState } from "@/types/Store/raffles";

const initialState: RaffleInitialState = {
  raffles: [],
  raffle: null,
  loading: true,
  donationForm1: {},
  donationFrom2:{},
  associations: [],
};

export const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {

    setRaffle: (state, action) =>{
        state.raffle = state.raffles.find(raffle => raffle.id.toString() === action.payload.toString()) || null
    },

    setDonationsForm1:  (state, action) =>{
        state.donationForm1 = action.payload
    },

    setDonationsForm2:  (state, action) =>{
      state.donationFrom2 = action.payload
  },



  },
  extraReducers: (builder) => {
    RAFFLES_EXTRA_REDUCERS(builder)  


  },
});

export const {setRaffle,setDonationsForm1,setDonationsForm2} = rafflesSlice.actions;
export const selectRaffleState = (state: RootState) => state.raffles;
export default rafflesSlice.reducer;
export * from "./thunks";
