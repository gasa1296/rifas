import {
  getRafflesDate,
  getRafflesFeatures,
  getTestimonies,
} from "@/services/raffles";
import { RafflesI } from "@/types/Model/Raffle";
import { create } from "zustand";

interface RaffleStore {
  isLoading: boolean;
  raffleFeature: RafflesI | null;
  rafflesFeature: RafflesI[];
  testimonies: any[];
  raffleDate: any[];
  error: boolean;
  setTestimonies: () => Promise<void>;
  setRaffleFeature: () => Promise<void>;
  setRaffleDate: () => Promise<void>;
}

export const useRaffleStore = create<RaffleStore>((set) => ({
  isLoading: false,
  raffleFeature: null,
  rafflesFeature: [],
  testimonies: [],
  raffleDate: [],

  error: false,

  setTestimonies: async () => {
    try {
      set({ isLoading: true });

      const { data } = await getTestimonies();

      set({
        testimonies: data.results,
        isLoading: false,
      });
    } catch (error) {}
  },
  setRaffleFeature: async () => {
    try {
      set({ isLoading: true });

      const { data } = await getRafflesFeatures();

      set({
        raffleFeature: data.results[0] || null,
        rafflesFeature: data.results,
        isLoading: false,
      });
    } catch (error) {}
  },
  setRaffleDate: async () => {
    try {
      set({ isLoading: true });

      const { data } = await getRafflesDate();

      set({
        raffleDate: data.results,
        isLoading: false,
      });
    } catch (error) {}
  },
}));
