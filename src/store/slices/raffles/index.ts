import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";
import { RAFFLES_EXTRA_REDUCERS } from "./extra-reducers";

import { RaffleInitialState } from "@/types/Store/raffles";

const initialState: RaffleInitialState = {
  raffles: [],
  raffle: null,
  loading: true,
  donationForm1: {},
  donationFrom2: {},
  associations: [],
  causesCategories: [],
  prizesCategories: [],
  selectedTickets: [],
  selectedPaymentMethod: null,
  selectedWallet: false,
  coupon: null,
};

export const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {
    setRaffle: (state, action) => {
      state.raffle = action.payload;
    },

    setDonationsForm1: (state, action) => {
      state.donationForm1 = action.payload;
    },

    setDonationsForm2: (state, action) => {
      state.donationFrom2 = action.payload;
    },

    setCausesCategories: (state, action) => {
      state.causesCategories = action.payload;
    },
    setPrizesCategories: (state, action) => {
      state.prizesCategories = action.payload;
    },
    setSelectedTicket: (state, action) => {
      state.selectedTickets = action.payload;
    },
    setSelectedPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
    setSelectedWallet: (state, action) => {
      state.selectedWallet = action.payload;
    },
    resetBuyRaffle: (state) => {
      state.selectedTickets = [];
      state.selectedPaymentMethod = null;
      state.selectedWallet = false;
      state.coupon = null;
      state.raffle = null;
    },
  },
  extraReducers: (builder) => {
    RAFFLES_EXTRA_REDUCERS(builder);
  },
});

export const {
  setRaffle,
  setSelectedTicket,
  setDonationsForm1,
  setDonationsForm2,
  setPrizesCategories,
  setCausesCategories,
  setSelectedPaymentMethod,
  setSelectedWallet,
  resetBuyRaffle,
} = rafflesSlice.actions;
export const selectRaffleState = (state: RootState) => state.raffles;
export default rafflesSlice.reducer;
export * from "./thunks";
