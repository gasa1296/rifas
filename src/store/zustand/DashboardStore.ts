import { create } from "zustand";
import { getDashboardCause } from "@/services/dashboard";
import { getDashboardPrize } from "@/services/dashboard";


interface CausesStoreDasboard {
    isLoading: boolean;
    cause: any[];
    error: boolean;
    getCause: () => Promise<void>;
  }

  export const useCauseStoreDashboard = create<CausesStoreDasboard>((set) => ({
    isLoading: false,
    cause: [],
    error: false,
  
    getCause: async () => {
      set({ isLoading: true });
  
      const { data } = await getDashboardCause();
  
      set({
        cause: data,
        isLoading: false,
      });
    },
  }));

  interface PrizeStoreDasboard {
    isLoading: boolean;
    prize: any[];
    error: boolean;
    getPrize: () => Promise<void>;
  }

  export const usePrizeStoreDashboard = create<PrizeStoreDasboard>((set) => ({
    isLoading: false,
    prize: [],
    error: false,
  
    getPrize: async () => {
      set({ isLoading: true });
  
      const { data } = await getDashboardPrize();
  
      set({
        prize: data,
        isLoading: false,
      });
    },
  }));